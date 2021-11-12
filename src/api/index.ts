import { EmployeesArrayType } from "../components/EmployeeContainer/EmployeeContainer";

const TOKEN = "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";
const GIST_ID = "43df1d70eab985ccd41cd877f2bc8081";
const GIST_FILENAME = "db.json";

export const getData = async() => {
  const req = await fetch(`https://api.github.com/gists/${GIST_ID}`);
  const gist = await req.json();
  return JSON.parse(gist.files[GIST_FILENAME].content);
}

export const setData = async(data: EmployeesArrayType) => {
  const req = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      files: {
        [GIST_FILENAME]: {
          content: JSON.stringify(data),
        },
      },
    }),
  });  

  return req.status;
}
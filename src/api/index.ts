const TOKEN = "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";
const GIST_ID = "43df1d70eab985ccd41cd877f2bc8081";
const GIST_FILENAME = "db.json";

export const getData = async() => {
  const req = await fetch(`https://api.github.com/gists/${GIST_ID}`);
  const gist = await req.json();
  return JSON.parse(gist.files[GIST_FILENAME].content);
}

export const setData = async(data: object) => {
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


let anything: any = [];

// store data on gist and return the response to the action
export const createEmployee = (newUser: any) => setData(newUser);

export const fetchEmployees = () => anything;
export const updateEmployee = (id: any, updatedUser: any) => anything;
export const deleteEmployee = (id: any) => anything;

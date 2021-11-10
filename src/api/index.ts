// export const login = (formData: any) => API.post('/users/login', formData);
// export const fetchEmployees = () => API.get('/users');
// export const createEmployee = (newUser: any) => API.post('/users', newUser);
// export const updateEmployee = (id: any, updatedUser: any) => API.patch(`/users/${id}`, updatedUser);
// export const deleteEmployee = (id: any) => API.delete(`/users/${id}`);

const TOKEN = "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";
const GIST_ID = "43df1d70eab985ccd41cd877f2bc8081";
const GIST_FILENAME = "db.json";

export const getData = async() => {
  const req = await fetch(`https://api.github.com/gists/${GIST_ID}`);
  const gist = await req.json();
  return JSON.parse(gist.files[GIST_FILENAME].content);
}

export const setData = async(data: object) => {
  console.log('data => ', data);
  
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

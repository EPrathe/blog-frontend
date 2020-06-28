import * as contentful from "contentful";

//https://levelup.gitconnected.com/managing-microcopy-with-react-and-contentful-acae948141ea

const fetchEntries = async() => {
  let client = await contentful.createClient({
    space: "4l76bla6vbnr",
    accessToken: "iIk069YpSKyGEGpv-dY5HnnWpXZo1AbP00lp7wcg3y0"
  });
  return client
    .getEntries(
    //   {
    //   content_type: "globalCopy",
    //   include: 2
    // }
    )
    .then(response => response.items)
    .catch(err => console.error(err));
};

export const getAllCopy = () => {
  return fetchEntries().then(response => {
    // get data for all components
   // const data = response[0].fields.componentCopy;

    // extract copy entries per component
    // return response.map(({ fields }) => {
    //   let entries = [];
    //   fields.copies.forEach(f => {
    //     entries[f.fields.id] = f.fields.copy;
    //   });
    //   return {
    //     component: fields.componentName,
    //     copies: entries
    //   };
    // });
    return response;
  });
};

export const getCopyForComponent = (copy, componentName) => {
  return copy.find(t => t.component === componentName);
};
export const formatDate = (date) => `
${date.getFullYear()}-
${(date.getMonth()+1).toString().padStart(2, "0")}-
${date.getDate().toString().padStart(2, "0")}
`.replace(/\n|\r/g, "")
export function formatDate(date : string | undefined) : string | undefined {
    if(!date) return date; 
    const obj = new Date(date);
    return  obj.toLocaleDateString();
  }

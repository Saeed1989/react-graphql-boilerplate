import moment from "moment";

export const arrayToString = (itemArray) => {
  if (!itemArray || !itemArray.length) return '';
  return itemArray.join(', ');
};

export const toFormattedDate = (dateString) => {
    if (!dateString) return '';
    return moment(dateString).format('YYYY-MM-DD');
  };
  

export function formatDecimal(dec) {
  return dec.toString().replace(".", ",");
}

export function formatPhoneNumber(str) {
  let phone = str;
  if (phone.charAt(0) === "0") {
    phone = phone.substring(1);
  }
  phone = phone.replace(/[\s()-]/g, "");
  return "tel:+49" + phone;
}

export function formatWhatsappMessage(str) {
  return str.replace(/\s+/g, "%20");
}

export function formatDate(str) {
  let date = new Date(str);
  let month;
  let year = date.getFullYear();
  switch (date.getMonth()) {
    case 0:
      month = "Januar";
      break;
    case 1:
      month = "Februar";
      break;
    case 2:
      month = "März";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "Mai";
      break;
    case 5:
      month = "Juni";
      break;
    case 6:
      month = "Juli";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "Oktober";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "Dezember";
  }
  return month + " " + year;
}

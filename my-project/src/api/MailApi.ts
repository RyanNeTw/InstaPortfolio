import { emojiType } from "../types/gitHubTypes";

const url = `https://api.ryantw.net/api/`

type Mail = {
  myMail: string;
  otherMail: string;
  subject: string | null;
  text: string;
};

const header = {
  "Access-Control-Allow-Origin": "http://api.ryantw.net",
  "Content-Type": "application/json",
};

async function SendMail(body: Mail): Promise<number> {
  const res = await fetch(url + "mail/send-email", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return res.status;
}

export const GetEmoji = async (search: string): Promise<emojiType[]> => {
  const res = await fetch(url + `emoji/${search}`, {
    headers: header,
    mode: "cors",
  });
  const emoji = await res.json();
  return emoji.data;
};

export default SendMail;

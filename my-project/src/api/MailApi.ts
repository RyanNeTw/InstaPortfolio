

const url = `https://api.ryantw.net/`

type Mail = {
    myMail: string;
    otherMail: string;
    subject: string | null;
    text: string;
  };

async function SendMail (body: Mail): Promise<number> {
    const res = await fetch(url + 'sendMail', {
        method: 'POST',
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    return res.status

}
export default SendMail
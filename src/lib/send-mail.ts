export const sendMail = async ({
  subject,
  body,
}: {
  subject: string;
  body: string;
}) => {
  try {
    const response = await fetch(
      "https://icompliancepe.com/wp-json/my-custom-api/v1/send-form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          body,
        }),
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

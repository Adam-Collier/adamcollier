import React from "react";
import { ActionFunction, redirect, useTransition } from "remix"
import { Form, TextInput } from "~/components/Form"
import notion from "~/utils/notion.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const link = form.get("link") as string;
  const name = form.get("name") as string;
  const image = form.get("image") as string;

  const database_id: string = process.env.NOTION_INTERNET_RADIO_STATIONS!

  await notion.pages.create({
    parent: {
      database_id,
    },
    properties: {
      link: {
        rich_text: [
          {
            text: {
              content: link,
            },
          },
        ],
      },
      name: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
      image: {
        rich_text: [
          {
            text: {
              content: image,
            },
          },
        ],
      }
    }
  })

  return redirect("/music");
}


const NewRadioShow = () => {
  const transition = useTransition();

  const handleChange = async (e: React.ChangeEvent<any>): Promise<void> => {
    let { value } = e.target as HTMLInputElement;

    if (!value) return;

    const response = await fetch("/admin/music/autofill", {
      method: "POST",
      body: JSON.stringify({
        url: value
      })
    });

    const data = await response.json();

    for (const property in data) {
      if (document.querySelector(`input[name="${property}"]`)) {
        let input = document.querySelector(`input[name="${property}"]`) as HTMLInputElement;
        input.value = data[property];
      }
    }
  }

  return <Form method="post" className="w-full max-w-xl mx-auto">
    <TextInput name="link" label="Link" onChange={handleChange} />
    <TextInput name="name" label="Name" />
    <TextInput name="image" label="Image" />
    <button className="btn">{transition.submission
      ? "Submitting..."
      : "Submit"}</button>
  </Form>
}

export default NewRadioShow
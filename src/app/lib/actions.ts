"use server";

export async function authenticate(_currentState: unknown, formData: FormData) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/auth`, {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return response.json();
}

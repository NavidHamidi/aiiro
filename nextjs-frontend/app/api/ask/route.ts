/* eslint-disable @typescript-eslint/no-explicit-any */

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const question = body.question;
    const res = await fetch('http://nestjs-backend:4000/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });
    const data = await res.json();
    return Response.json(data, { status: 200 });
  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 500 });
  }
};

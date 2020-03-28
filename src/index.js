

export async function handler(event, context){
  console.log("Hello World");
  return Promise.resolve({
    statusCode: 200,
    body: JSON.stringify({
    msg: 'Hello World!'}),
  });
}

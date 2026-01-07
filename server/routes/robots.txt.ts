export default defineEventHandler(async (event) => {
  const txt = await $fetch<string>("https://bk.saudiozone.com.sa/robots.txt", {
    responseType: "text",
  });

  event.node.res.setHeader("Content-Type", "text/plain; charset=utf-8");
  return txt.endsWith("\n") ? txt : txt + "\n";
});

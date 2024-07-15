function sleep(ms){
  return new Promise ((reslve)=>setTimeout(reslve,ms))
}

async function sumAsync(x,y){
  console.log('script start')
  await sleep(500)
  return (x+y)
}

sumAsync(5,5).then((r)=>{
  console.log(r)
})
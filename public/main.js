let n = 1;
getPage.onclick = ()=>{
  const request = new XMLHttpRequest();
  request.open('GET',`/page${n+1}`);
  request.onreadystatechange = ()=>{
    if(request.readyState === 4 && request.status === 200){
      const array = JSON.parse(request.response);
      array.forEach(item=>{
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      })
      n+=1;
    }
  }
  request.send();
}

getJSON.onclick = ()=>{
  const request = new XMLHttpRequest();
  request.open('GET','/5.json')
  request.onreadystatechange = ()=>{
    if(request.readyState === 4 && request.status === 200){
      console.log(request.response)
      const object = JSON.parse(request.response)  //将参数转化成json对象
      console.log(object)
      myName.textContent = object.name
    }
  }
  request.send()
}

getXML.onclick = ()=>{
  const request = new XMLHttpRequest();
  request.open('GET','/4.xml')
  request.onreadystatechange=()=>{
    if(request.readyState === 4){
      console.log(request.responseXML)
      const dom = request.responseXML;
      const text = dom.getElementsByTagName('warning')[0].textContent;
      console.log(text.trim())
    }
  }
  request.send()
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET','3.html')
  request.onload = ()=>{
    console.log(request.response)
    const div = document.createElement('div')
    div.innerHTML = request.response
    document.body.appendChild(div)
  }
  request.onerror = ()=>{}
  request.send()
}

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET','/2.js')
  request.onload = ()=>{
    console.log(request.respond)

    const script = document.createElement('script');
    script.innerHTML = request.response;
    console.log(script);
    document.body.appendChild(script);
  }
  request.onerror= ()=>{}
  request.send()
}

getCSS.onclick = () =>{
  const request = new XMLHttpRequest();
  request.open('GET','/style.css');
  request.onreadystatechange = ()=>{
    console.log('request.response:');
    console.log(request.response);
    if(request.readyState === 4){
      if(request.status>=200 && request.status < 300){
        console.log(request.status);
        //创建style标签
        const style = document.createElement('style');
        //写入style内容
        style.innerHTML = request.response;
        //插入到头里
        document.head.appendChild(style);
      }else{
        alert('加载CSS失败');
      }
    }
  };
  request.send();
};
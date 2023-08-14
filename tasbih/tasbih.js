let count = 0;
    function clickMe1(){
        const element = document.getElementById('count1');
        count++;
        element.innerText = count;
    }

    document.getElementById('btn-minus1').addEventListener('click', function(){
        const element = document.getElementById('count1');
        count--;
        element.innerText = count;
    })


    let count1 = 0;
    function clickMe2(){
        const element = document.getElementById('count2');
        count++;
        element.innerText = count;
    }

    document.getElementById('btn-minus2').addEventListener('click', function(){
        const element = document.getElementById('count2');
        count--;
        element.innerText = count;
    })


    let count2 = 0;
    function clickMe3(){
        const element = document.getElementById('count3');
        count++;
        element.innerText = count;
    }

    document.getElementById('btn-minus3').addEventListener('click', function(){
        const element = document.getElementById('count3');
        count--;
        element.innerText = count;
    })
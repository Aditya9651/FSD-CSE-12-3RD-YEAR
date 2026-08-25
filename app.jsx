// const container = document.getElementById('container');
// console.log(container);
// const root = ReactDOM.createRoot(container);
// // const h2 = React.createElement('h2', { style: { color: 'blue' } }, 'welcome to react JS');
// // const h1 = React.createElement('h1', { style: { color: 'red' } }, 'welcome to react DOM');
// // const img=React.createElement('img',{src:'https://imgs.search.brave.com/615E4r7bUQ8fR55ibI23RbvhrrdaHPQfXpP_sLET6tA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk16TXdZV1pr/WmpjdFpUVTVOeTAw/TUROaUxUbGtNbVl0/TnpreU9ETXdNR1V4/WXpBMlhrRXlYa0Zx/Y0dkZVFYVnlOelUx/TnpFM05UZ0AuanBn',style:{height:'200',width:'200'}});
// // const div2='<div></div>';
// const h3=<center><h1>welcome to react JSX</h1></center>;
// const h2=<h2 style={{color:'blue'}}>welcome to react</h2>;
// const img=<img src='https://imgs.search.brave.com/615E4r7bUQ8fR55ibI23RbvhrrdaHPQfXpP_sLET6tA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk16TXdZV1pr/WmpjdFpUVTVOeTAw/TUROaUxUbGtNbVl0/TnpreU9ETXdNR1V4/WXpBMlhrRXlYa0Zx/Y0dkZVFYVnlOelUx/TnpFM05UZ0AuanBn' style={{height:'200',width:'200'}}></img>;
// // const div=React.createElement('div',null,img,h1,h2,div2,h3);
// const div=React.createElement(h3,img,h2);
// const div1=
// <>
// <div style={{border:'2px solid red',height:'400px',width:'400px'}}>
//     {h3}
//     {div}
// </div>
// </>
// root.render(div1);
const container = document.getElementById('container');
console.log(container);
const root = ReactDOM.createRoot(container);
const h3 = (
    <center>
        <h1>welcome to react JSX</h1>
    </center>
);
const h2 = (
    <h2 style={{ color: 'blue' }}>
        welcome to react
    </h2>
);
const img = (
    <img
        src="https://imgs.search.brave.com/2AFopjBaCXotUgW13YimUEgIk0Xn0qiztZbLg4ln7cg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kaXNu/ZXkuaW1hZ2VzLmVk/Z2UuYmFtZ3JpZC5j/b20vcmlwY3V0LWRl/bGl2ZXJ5L3YyL3Zh/cmlhbnQvZGlzbmV5/LzFhMjdiZTBlLWI1/OGMtNDU3Mi04NGUx/LTFlMjYxNWIzOTkx/OS9jb21wb3NlP2Zv/cm1hdD13ZWJwJndp/ZHRoPTI1NjA"
        style={{ height: '200px', width: '200px' }}
    />
);
const div = React.createElement(
    'div',
    null,
    h3,
    img,
    h2
);
const div1 = (
    <div style={{
        border: '2px solid red',
        height: '400px',
        width: '400px'
    }}>
        {h3}
        {div}
    </div>
);
root.render(div1);
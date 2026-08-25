const container = document.getElementById('container');
console.log(container);
const root = ReactDOM.createRoot(container);
const h2 = React.createElement('h2', { style: { color: 'blue' } }, 'welcome to react JS');
const h1 = React.createElement('h1', { style: { color: 'red' } }, 'welcome to react DOM');
const img=React.createElement('img',{src:'https://imgs.search.brave.com/615E4r7bUQ8fR55ibI23RbvhrrdaHPQfXpP_sLET6tA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk16TXdZV1pr/WmpjdFpUVTVOeTAw/TUROaUxUbGtNbVl0/TnpreU9ETXdNR1V4/WXpBMlhrRXlYa0Zx/Y0dkZVFYVnlOelUx/TnpFM05UZ0AuanBn',style:{height:'200',width:'200'}});
const div2='<div></div>';
const div=React.createElement('div',null,img,h1,h2,div2);
root.render(div);
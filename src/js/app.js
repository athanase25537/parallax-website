const feuill1 = document.querySelector('#feuille1');
const feuill2 = document.querySelector('#feuille2');
const title = document.querySelector('.title');
const arbres = document.querySelector('#arbres');
const paysage = document.querySelector('#paysage');

document.body.onscroll = () => {
    feuill1.style.left = -scrollY + 'px';
    feuill1.style.top = -scrollY / 10 + 'px';
    feuill2.style.left = scrollY + 'px';
    feuill2.style.left = scrollY + 'px';
    feuill2.style.top = -scrollY / 10 + 'px';
    arbres.style.top = scrollY / 10 + '%';
    paysage.style.top = scrollY / 10 + '%';

    title.style.marginTop = scrollY + 'px';
}

let accountArr = [];
let ownerHeader = document.querySelector('.Ppjfr');
let owner = ownerHeader.querySelector('.sqdOP').innerHTML;
console.log('owner: ' + owner);

function closepop(){
    document.querySelector('.popup-container').remove();
}

function wrapper_return(callback) {
    let promise = new Promise((res, rej) => {
        function inner_clickable() {
            let clickable = document.querySelector('.dCJp8');
            if (clickable) {
                console.log('clicking');
                clickable.click();
                setTimeout(function () { inner_clickable(); }, 2000);
            }
            else {
                res();
            }
        }
        inner_clickable();
    });

    return promise;
}



function build_accounts_list() {
    wrapper_return().then(() => {
        let accounts = document.querySelectorAll('.C7I1f');

        for (let i = 0; i < accounts.length; i++) {
            let targetAccount = accounts[i].querySelector('.ZIAjV').innerHTML;
            if (targetAccount != owner) {
                let tags = accounts[i].querySelector('.C4VMK').querySelectorAll('span');
                for (let x = 1; x < tags.length; x++) {
                    accountArr.push(targetAccount);
                    if (tags[x].querySelector('a')) {
                        console.log(`account ${targetAccount} gets an entry for tagging ${tags[x].querySelector('a').innerHTML}`);
                    }
                    else {
                        console.log(`account ${targetAccount} gets an entry for commenting ${tags[x].innerHTML}`);
                    }
                }

                accountArr.push(targetAccount);

            }

        }
        accountArr.forEach((account) => {
            console.log(account);
        });

        console.log(`number of entries: ${accountArr.length}`);
        if (confirm("do you need to add additional entries")) {
            let entries = window.prompt('please add the entries in here seperated by a comma');
            let parsedEntries = entries.split(',');
            parsedEntries.forEach((entry) => {
                for(p = 0; p < 10; p++){
                    accountArr.push(entry);
                }
                
            });
        }

        let template = `
            <style>
            .popup-container{
                z-index: 9999999999999999999;
                position: fixed;
                background-color:white;
                max-width: 1300px;
                margin: 0 auto;
                right: 0;
                left: 0;
                box-shadow: 0px 0px 10px grey;
                border-radius: 5px;
                top: 20px;
                max-height: 500px;
                overflow-y: scroll;
                padding: 30px;
            }

            .popup-container-close{
                cursor: pointer;
                font-family: sans-serif;
                position: absolute;
                top: 10px;
                right: 10px;
            }
            
            </style>
                <div class="popup-container">
                <div class="popup-container-close" onclick="closepop()">X</div>
                <div class="popup-container-title"><h2>Entries</h2></div>
                <div class="popup-container-body"></div>
                </div>
            `;
        let elem = document.createElement('div');
        elem.innerHTML = template;
        document.body.appendChild(elem);
        let placedElem = document.querySelector('.popup-container-body');
        //build template
        let StrAppend = accountArr.join('<br>');
        placedElem.innerHTML = StrAppend;
        //end build template


    });

}
build_accounts_list();




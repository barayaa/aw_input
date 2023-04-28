export const commonCss = `
.icon{
    width: 25px;
    text-align: center;
    padding-left: 5px;
    padding-right: 2px;
}

:host{
    border-width: 1px;
    border-style: solid;
    padding-bottom: 1px 0;
    display: inline-block;
}


:host ::ng-deep input{
    border: none;
    outline: none;
    height: 100%;
    margin: 1px 0;
    box-sizing: border-box;
}

:host(.input-focus){
    outline: none;
    
   
}
`;

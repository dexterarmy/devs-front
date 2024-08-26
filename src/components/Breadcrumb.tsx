import React,{useState, useEffect,createElement} from "react";


/*
Question : 
1. series of links, when clicked  on a content, that content's breadcrumb will show 
2. a home breadcrumb by default 
3. different components are there , but at a time on a page a single component wil be shown. The component which is shown , breadcrumb of that should be visible
4. if two components are interrelated then breadcrumb should follow
5. if component is independant , breadcrumb should be independant

Sol real life : 
real life analogy : 
there are different rooms , A , B, C 
/A/table/comp went to room A , went on a table then comp open 

/A -> went to room A 
/B -> went to room B 

1. i will go to room A , update , then table , comp , and update the three. 
    -> there must be an indication that this table is in room A , then this comp is on this table. 
    So we will not put every detail of room in an object so as to map , that will be not efficient. 
    We will need to pass a signal that now the table which user chose is in this room only 
*/

interface TabComponents {
    [key: string]: any;
}

const compareArrayForEquality = (arr1:string[] , arr2:string[]) => {

    if(arr1.join('') === arr2.join('')){
        return true;
    }

    return false;

}

const updateBreadcrumbArr = (orgArr:string[] , toCheckArr:string[]):string[] => {

 
    if(orgArr.length === 0){
        return toCheckArr;
    }

        if(orgArr[orgArr.length - 1] === toCheckArr[toCheckArr.length - 1]){
            let takeOutElementsFromOrgArrayForEquality = [];
            for(let j = 0 ; j < toCheckArr.length ; j++){
                takeOutElementsFromOrgArrayForEquality.push(orgArr[(orgArr.length - 1) - j]);

            }
           const ifTrue =  compareArrayForEquality(toCheckArr , takeOutElementsFromOrgArrayForEquality);
           if(ifTrue){
            return orgArr;
           }
        }

        orgArr.pop();
        return updateBreadcrumbArr(orgArr , toCheckArr);
}


const Breadcrumbs = () => {

    const [breadcrumbArr , setBreadcrumbArr] = useState<any>(new Set(['home']));
    const [selectedBreadCrumb , setSelectedBreadcrumb] = useState<string>('home');

    const manageBreadCrumbs = (comp : string, previousComps:string[]) => {

        setSelectedBreadcrumb(() => {
            setBreadcrumbArr((arr:any) => {
                const newArr = arr;
                if(comp === 'home'){
                    newArr.clear();
                    newArr.add(comp);
                    return newArr ;
                }
                const updatedBreadCrumbArray = [...updateBreadcrumbArr(Array.from(newArr), Array.from(previousComps)), comp];
                const updatedBreadCrumbSet = new Set(updatedBreadCrumbArray);
                return updatedBreadCrumbSet;
            })

            return comp;
           
        })

    }

    const handleBreadcrumbClick = (data:string, bArr: string[]):any => {

        if(data === bArr[bArr.length - 1]){
            setBreadcrumbArr(bArr);
            setSelectedBreadcrumb(data);
            return 1;
        }

        bArr.pop();
        return handleBreadcrumbClick(data, bArr);

    }

    const obj:TabComponents = {
        'home' : Home,
        'Tab1' : Tab1,
        'Tab2' : Tab2
    }

    console.log(selectedBreadCrumb);

    return (
        <>
        {
           Array.from(breadcrumbArr).map((data:any) => {
            return (
                <a onClick={() => {handleBreadcrumbClick(data, Array.from(breadcrumbArr))} }>{data}/</a>
            )

           })
        }
        <div>
            {createElement(obj[selectedBreadCrumb ],{manageBreadCrumbs})}
        </div>
        </>
    )
}

export default Breadcrumbs;

const Home = ({manageBreadCrumbs}:any) => {

    return (
        <>
        <h1>Home</h1>
        <button onClick={() => {manageBreadCrumbs('Tab1',['home'])}} >go to tab1</button>
        </>
    )
}

const Tab1 = ({manageBreadCrumbs}:any) => {
    return (
    <>
    <h1>tab1</h1>
    <button onClick={() => {manageBreadCrumbs('Tab2',['home','Tab1'])}} >go to tab2</button>
    </>
    )
}

const Tab2 = ({manageBreadCrumbs}:any) => {
    return (
    <>
    <h1>tab2</h1>
    <button onClick={() => {manageBreadCrumbs('home',[])}} >go to home</button>
    </>
    )
}
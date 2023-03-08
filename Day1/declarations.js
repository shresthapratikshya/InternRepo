function declarations() {
    var a;
    a = 10;
    var a = 20;
    console.log(a);

    let b = 12;
    b = 2;
    // let b = 15; cannot be redeclared
    console.log(b);

    const c = 3.14;
    // const c = 12; cannot be redeclared or reassigned
    console.log(c);

    for (let i = 1; i < 3; i++) {
        console.log(i);
    }
    // console.log(i); out of scope


}

declarations();
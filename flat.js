[1,2,3].map((v)=>[v*2,String(v*2)])

[1,2,3].map((v)=>[v*2,String(v*2)]).flat(1)


// Or 

[1,2,3].flatMap((v)=>[v*2,String(v*2)])
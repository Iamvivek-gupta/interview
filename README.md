# interview

## https://github.com/Iamvivek-gupta/interview



# Deep Copy and Shallow Copy

## jsut to give you a overview, deep copy and shallow copy are two ways in javascript to copy the object. and they are different from each other. so if we talk about a js object, if you copy one js object into another with the help of simple assignment operator, it create a shallow copy. shallow copy means that both copied ob are going to share same memory allocation. in that case, if you modify the one ob those changes are going to reflect into another as well. so to avoid it we can create a deep copy of a ob. now when you copy a ob with deep clone in that case they share different memory allocation. so if you modify one ob those changes are not going to reflect into another one. there are different methods that can help us to create a deep clone like we can use JSON.stringfy and JSON.parse method Object.Object.assign method and structure.clone() method in js and there are lot of libraries that give you utility to create a deep clone but you need to be very careful while using it because each method may have certain limitation. 

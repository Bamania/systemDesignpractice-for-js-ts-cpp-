#include<iostream>
using namespace std;


//pointers-to store the memory adress of some another variable !
//&-adress of operator
//& dereference operator
struct test{
    string testName;
    int testNo;
};
//TreeNode has a value,left Ptr,and right Ptr
struct TreeNode{
    int val;
    TreeNode *left;  //you may be wondering whats TreeNode is doing
    // in place of data type defination,because we want the ptr to point this datatype only
    TreeNode *right;

    TreeNode(int x){
        val=x;
        left=nullptr;
        right=nullptr;
    }
};
int main(){
    // test test1;
    // test1.testName="serviceTest";
    // test1.testNo=011;
    //Make a tree Node,but what should be the datatype?
    TreeNode node1(1);
    TreeNode node2(2);
    TreeNode node3(3);
    node1.left = &node2; //should point to the memory !
    node1.right = &node3;

    cout << node1.val << " " << node1.left->val << " " << node1.right->val << endl;

    // string pointThis="Aman";
    // string *pPointThis=&pointThis;
    // cout<<test1.testName<<" "<<test1.testNo<<endl;
    // cout<<*pPointThis<<" "<<test1.testNo<<endl;
    return 0;
}
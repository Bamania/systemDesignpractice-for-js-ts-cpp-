#include<iostream>
#include<vector>
using namespace std;
int main(){
    int T;
    cin>>T;
    while(T--){
        int n;
        cin>>n;
        vector<int> arr(n);
        //input 
        for(int i=0;i<n;i++){
            cin>>arr[i];
            // cout<<arr[i]<<" ";
        }
       if(arr[0]==1){
        cout<<"YES"<<endl;
       }else {
        cout<<"No"<<endl;
       }
        

    }
    return 0;
}
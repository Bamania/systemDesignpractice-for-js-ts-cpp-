#include<iostream>
#include<vector>
using namespace std;

int main(){

     int T;
     cin>>T;
while(T--){
    int n;
    cin>>n;
    vector<char> cells(n);
   
    for(int i=0;i<n;i++){
        cin>>cells[i];
        // cout<<"input "<<cells[i]<<endl;
    }
    
    //input stored
    int len=0;
    int ans=0;
    for(int i=0;i<n;i++){
        // cout<<"current length before any operation and if checks "<<len<<endl;
     
        if(cells[i]=='#'){
            // cout<<"before zero len is "<<len<<" ans is "<<ans<<endl;
            len=0;
            continue;

        }
        // cout<<"len plus for "<<cells[i]<<endl;
        len++;
        ans++;
           if(len>=3){
            // cout<<"calling the break because "<<len<<endl;
            ans=2;
            break;
        }

    }
    cout<<ans<<endl;
  
     

}
return 0;
}
#include<iostream>
#include<vector>
#include<unordered_map>
using namespace std;
int main(){
    int T;cin>>T;
    while(T--){
        int n;cin>>n;
        vector<int> arr(n);
        unordered_map<int,int> mp;
        for(int i=0;i<n;i++){
            cin>>arr[i];
        }
        // inputs stored !
    
        for(int i=0;i<n;i++){
            mp[arr[i]]++;
        }
        if(mp.size() == 1){
            cout << "YES" << endl;
        } else if(mp.size() == 2){
            auto it = mp.begin();
            int cnt1 = it->second;
            ++it;
            int cnt2 = it->second;
            if(abs(cnt1 - cnt2) <= 1){
                cout << "YES" << endl;
            } else {
                cout << "NO" << endl;
            }
        } else {
            cout << "NO" << endl;
        }
    }
return 0;
}
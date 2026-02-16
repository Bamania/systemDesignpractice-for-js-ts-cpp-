#include <iostream>
#include <vector>
using namespace std;

int main()
{
    int T;
    cin >> T;

    while (T--)
    {
        int n, k;
        cin >> n >> k;
        vector<int> arr(n);
        bool print= false;
        for (int i = 0; i < n; i++)
        {
            cin >> arr[i];
        }
        // input stored
        if(k<=1){
            // print yes only if it is already non decreasing otherwise NO
            for(int i=1;i<n;i++){
                if(arr[i]>=arr[i-1]) continue;
                else {
                     cout<< "NO" <<endl; 
                     print=true;
                     break;
                }
            } 
            if(!print) cout<<"YES"<<endl;
            
           
            
        } else {
            cout<< "YES"<<endl;
        }

    }
    return 0;
}
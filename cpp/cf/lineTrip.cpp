#include <iostream>
#include <vector>
using namespace std;

int main()
{
    int T;
    cin >> T;

    while (T--)
    {
        int n, x;
        cin >> n >> x;
        vector<int> arr(n);
        bool print= false;
        for (int i = 0; i < n; i++)
        {
            cin >> arr[i];
        }


        int dist2=0;
        if(x>arr[n-1]) dist2=2*(x-arr[n-1]);
        else dist2=2*x;
        int gap=arr[0];
        if(n>1){

            for(int i=1;i<n;i++){
                int currGap=arr[i]-arr[i-1];
                if(currGap>gap) gap=currGap;
            }

        } else gap=arr[0];

        if(gap>dist2){
            cout<<gap<<endl;
        }else {
            cout<<dist2<<endl;
        }
        //  max gap between the ele

    }
    return 0;
}
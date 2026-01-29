#include<iostream>
#include<vector>
using namespace std;


int main() {
    int T;
    cin >> T;
    vector<vector<int>> inputs;
    vector<int> outputs;
    while (T--) {
        int n;
        cin >> n;
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        inputs.push_back(arr);
      
    }

    for(int i=0;i<inputs.size();i++){
        int sum=0;
        for(int j=0;j<inputs[i].size();j++){
            if(inputs[i][0] == -1 && inputs[i][inputs[i].size()-1] == -1){
                inputs[i][0]=0;
                inputs[i][inputs[i].size()-1]=0;
            }
            if(inputs[i][0]==-1){
                inputs[i][0]=inputs[i][inputs[i].size()-1];
            }
            
            if(inputs[i][inputs[i].size()-1]==-1){
                inputs[i][inputs[i].size()-1]=inputs[i][0];
            }
            
             sum=abs(inputs[i][inputs[i].size()-1]-inputs[i][0]);
        }
        outputs.push_back(sum);
        
    }
    for(int i=0;i<outputs.size();i++){
        cout<<outputs[i]<< " ";
    }



    return 0;
}
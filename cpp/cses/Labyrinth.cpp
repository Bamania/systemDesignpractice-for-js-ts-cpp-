#include <iostream>
#include <string>
#include <vector>
#include <queue>
#include <stack>
using namespace std;

// pointers-to store the memory adress of some another variable !
//&-adress of operator
//* dereference operator

int dfs(int r, int c, vector<vector<int>> &vis, const vector<vector<char>> &grid)
{
    // push the node to the queue
    int n = grid.size();
    int m = grid[0].size();
    vis[r][c]=1;
    // cout<<"dfs working "<<r<<" "<<c<<endl;
    if(grid[r][c]=='B') return 1;
    int dr[4] = {-1, 0, 1, 0};
    int dc[4] = {0, 1, 0, -1};

    for(int i=0;i<4;i++){
        int nr=r+dr[i];
        int nc=c+dc[i];

        if( nr>=0 && nr<n && nc>=0 && nc<m && !vis[nr][nc] ){
            if( grid[nr][nc]=='.' || grid[nr][nc]=='B' ) {
                // cout<<"moving to "<< nr <<" "<< nc <<"from " <<r << " "<<c<<endl;
                // if(dfs(nr,nc,vis,grid)==1) return 1;
               if(dfs(nr,nc,vis,grid)) return 1;
            //    else return 0;
                
            }
            
        }
    }
  return 0;
}
int main()
{
  
    int n, m;
    cin >> n >> m;
    vector<vector<char>> grid(n, vector<char>(m));
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cin >> grid[i][j];
        }
    }
    int ans = 0;
    vector<vector<int>> vis(n, vector<int>(m, 0));

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            if (grid[i][j] == 'A' && !vis[i][j])
            {
                // start the dfs
            //    cout<<"starting at "<< i << " " << j <<endl;
                int val= dfs(i, j, vis, grid);
                if(val==1) cout<<"YES"<<endl;
                else {
                    cout<<"NO"<<endl;
                }
            }
        }
    }
   
    return 0;
}
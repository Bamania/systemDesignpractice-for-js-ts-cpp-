#include <iostream>
#include <string>
#include <vector>
#include <queue>
#include <stack>
using namespace std;

// pointers-to store the memory adress of some another variable !
//&-adress of operator
//* dereference operator

void bfs(int r, int c, vector<vector<int>> &vis, const vector<vector<char>> &grid)
{
    // push the node to the queue
    int n = grid.size();
    int m = grid[0].size();
    queue<pair<int, int>> q;
    q.push({r, c});
    vis[r][c]=1;
    int dr[4] = {-1, 0, 1, 0};
    int dc[4] = {0, 1, 0, -1};
    while (!q.empty())
    {
        int r = q.front().first;
        int c = q.front().second;
        q.pop();
        for (int i = 0; i < 4; i++)
        {
            int nr = r + dr[i];
            int nc = c + dc[i];
            if (nr >= 0 && nr < n && nc >= 0 && nc < m && !vis[nr][nc] && grid[nr][nc] == '.')
            {
                vis[nr][nc]=1;
                q.push({nr, nc});
            }
        }
    }
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
            if (grid[i][j] == '.' && !vis[i][j])
            {
                // start the bfs
                ans++;
                bfs(i, j, vis, grid);
            }
        }
    }
    cout << ans << "\n";
    return 0;
}
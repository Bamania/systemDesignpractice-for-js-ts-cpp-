// #include <iostream>
// #include <vector>
// #include <algorithm>
// #include <map>
// #include <set>
// #include <string>
// #include <cstring>
// #include <queue>
// #include <stack>
// #include <deque>
// #include <unordered_map>
// #include <unordered_set>
// #include <numeric>
// #include <cmath>
// #include <iomanip>
// #include <climits>
// #include <cassert>
// #include <functional>
// #include <bitset>
// #include <tuple>
// #include <utility>
// #include <chrono>
// #include <ctime>

// #ifndef ONLINE_JUDGE
// #define debug(x) cerr << #x << " = " << (x) << nline;
// #else
// #define debug(x)
// #endif

// using namespace std;

// #define MOD 1000000007
// #define INF 1000000000000000000LL
// #define mp make_pair
// #define nline '\n'
// #define yes cout << "YES\n"
// #define no cout << "NO\n"

// #define ll long long
// #define pii pair<int, int>
// #define pll pair<long long, long long>
// #define vi vector<int>
// #define vll vector<long long>
// #define mii map<int, int>
// #define si set<int>
// #define sc set<char>

// #define f(i, s, e) for (long long i = s; i < e; i++)
// #define cf(i, s, e) for (long long i = s; i <= e; i++)
// #define rf(i, e, s) for (long long i = e - 1; i >= s; i--)

// #define debug(x) cerr << #x << " = " << (x) << nline;

// void solve()
// {
//       ll n;
//       cin >> n;
//       vll v(n);
//       f(i, 0, n) cin >> v[i];
//       f(i, 0, n)
//       {
//             if (v[i] != n - i)
//             {
//                   f(j, i + 1, n)
//                   {
//                         if (v[j] == n - i)
//                         {
//                               reverse(v.begin() + i, v.begin() + j + 1);
//                               for (auto it : v)
//                               {
//                                     cout << it << " ";
//                               }
//                               cout << nline;
//                               return;
//                         }
//                   }
//             }
//       }
//       for (auto it : v)
//       {
//             cout << it << " ";
//       }
//       cout << nline;
// }
// int main()
// {
// #ifndef ONLINE_JUDGE
//       freopen("input.txt", "r", stdin);
//       freopen("output.txt", "w", stdout);
//       clock_t T = clock();
// #endif
//       ios_base::sync_with_stdio(false);
//       cin.tie(NULL);

//       ll t;
//       cin >> t;
//       while (t--)
//       {
//             solve();
//       }

// #ifndef ONLINE_JUDGE
//       cerr << "\nTime taken: "
//            << (float)(clock() - T) / CLOCKS_PER_SEC
//            << " sec" << nline;
// #endif
//       return 0;
// }
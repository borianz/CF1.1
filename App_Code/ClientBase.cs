using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Collections.Concurrent;

/// <summary>
///ClientBase 的摘要说明
/// </summary>
public class ClientBase : IDisposable
{
    public string UserName { get; private set; }
    public static int MaxInstance { get; set; }
    protected System.Data.Entity.DbContext dbContext;
    static readonly ConcurrentDictionary<string, ClientBase> pool = new ConcurrentDictionary<string, ClientBase>();
    private ClientBase() { }
    protected ClientBase(string userName)
    {

    }
    public static ClientBase Get(string userName)
    {
        ClientBase client;
        pool.TryRemove(userName, out client);
        return client ?? new ClientBase() { UserName = userName };
    }
    
    public void Dispose()
    {
        if (UserName != string.Empty && pool.Count < MaxInstance && pool.TryAdd(UserName, this))
            return;
        else
            dbContext.Dispose();
    }

}
function outer()
{
    state = 1
    function inner()
    {
        console.log(state + ' - inner')
        state ++;
    }
    inner()
}
outer()

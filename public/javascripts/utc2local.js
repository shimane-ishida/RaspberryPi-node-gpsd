Date.prototype.utc2local = function()
{
    this.setTime(
        this.getTime()-(this.getTimezoneOffset()*60*1000)
    );
}
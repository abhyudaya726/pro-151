AFRAME.registerComponent("car",{
    schema:{
        movex:{type:"number",default:2}
    },
    tick:function(){
        this.data.movex = this.data.movex-0.1
        var pos = this.el.getAttribute("position")
        pos.x = this.data.movex
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
}
)
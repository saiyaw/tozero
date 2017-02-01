package routers

import (
	"github.com/saiyaw/tozero/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
}

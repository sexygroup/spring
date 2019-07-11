window.onload = function () {
    v1 = new Vue({
        el: '#app',
        data: {
            admin: {
                adminId: 1,
                adminPassword: ''
            },
            adminCode: '',		//admin.id对应的6位编号
            //-------------------------------------------
            //url:"http://127.0.0.1:8080/spring9/"
            //url:"http://10.241.77.73:9876/"

            url: "http://127.0.0.1:8080/spring/",
            upload: "http://127.0.0.1:8080/spring/upload/",

            index: 0,//用于滚动更新

            images: [],
            imagesAll: [],
            staff1: {
                staffId: 0,
                staffQuestion: '',
                staffAnswer: '',
                staffPassword: '',
                staffIsAdmin: 0,
                staffName: '',
                staffPhone: '',
                staffLogin: 0
            },

            dialogFormVisibleImage: false,//用于图片预览
            selectImage: {},//用于图片预览

            input: "",
            select: ""

        },
        mounted: function () {
            window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
        },


        beforeDestory: function () {
            //window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
        },
        methods: {
            handleScroll: function () {
                let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                // 设备/屏幕高度
                //let scrollObj = document.getElementById("div"); // 滚动区域
                let scrollHeight = document.documentElement.scrollHeight; // 滚动条的总高度
                let scrollTop = parseInt(document.documentElement.scrollTop); // div 到头部的距离

                //console.log(scrollTop);
                //滚动条到底部的条件
                if (scrollTop + clientHeight >= scrollHeight - 50) {
                    // div 到头部的距离 + 屏幕高度 = 可滚动的总高度
                    this.loadImage();
                }
            },
            showImage: function () {
                //初始化信息
                this.staff1 = this.init_staff();
                var t_staffCode = window.location.href.split("?")[1];	//从网址获取code


                //与后台交互，通过t_staffCode查询 staff信息；
                var t_id = this.codeToId(t_staffCode);
                this.findStaffById(t_id);

                //等待后台返回数据需要延迟一段时间，业务逻辑要延时处理。用setTimeout(function(),400);
                var handle = this;	//供setTimeout()使用外层this
                window.setTimeout(function () {
                    //登录校验。无账号登录||非管理员账号登录||管理员登录标识位为0，则失败。
                    if (handle.staff1.staffId == 0 || handle.staff1.staffIsAdmin == 0 || handle.staff1.staffLogin == 0) {
                        window.location.href = "login.html";
                    }
                    var handle1 = handle;
                    axios.get(handle.url + "client/findAllDetail").then(function (response) {
                        handle1.imagesAll = response.data;
                        for (i = 0; i < handle1.imagesAll.length; i++) {
                            if (handle1.imagesAll[i].imageId === null) {
                                handle1.imagesAll.splice(i, 1);
                                i--;
                            }
                        }
                        if (handle1.imagesAll.length >= 12) {
                            for (i = 0; i < 12; i++) {
                                handle1.images.push(handle1.imagesAll[i]);
                            }
                            handle.index += 12
                        } else {
                            handle1.images = handle1.imagesAll;
                            handle1.index += handle1.imagesAll.length;
                        }

                    });

                }, 400);

            },

            loadImage: function () {

                //console.log(this.index);

                if (this.imagesAll.length >= this.index + 12) {
                    let i = 0;
                    for (i = 0; i < 12; i++)
                        this.images.push(this.imagesAll[this.index + i])
                    this.index += 12;
                } else {
                    for (i = 0; i < this.imagesAll.length - this.index; i++)
                        this.images.push(this.imagesAll[this.index + i])
                    this.index += this.imagesAll.length - this.index;
                }
            },

            findImage: function () {
                if (this.select === "") {
                    this.$alert("请选择查询条件");
                } else if (this.select === "1") {
                    axios.get(this.url + "client/findImageByClientId",
                        {
                            params: {
                                id: this.input
                            }
                        })
                        .then(response => {
                            this.images = response.data;
                        })
                        .catch(error => {
                            //console.log(error);
                        })
                } else if (this.select === "2") {
                    console.log("aa");
                    axios.get(this.url + "client/findImageByClientName",
                        {
                            params: {
                                name: this.input
                            }
                        })
                        .then(response => {
                            console.log(response.data);

                            this.images = response.data;
                        })
                        .catch(error => {
                            console.log(error);
                        })
                } else if (this.select === "3") {
                    this.images = this.imagesAll;
                }
            },

            deleteImage: function (imageId, index) {
                if (confirm("确认删除图片？")) {
                    //console.log(this.url);
                    axios.get(this.url + "image/deleteById",
                        {
                            params: {
                                id: imageId
                            }
                        })
                        .then(response => {
                            if (response.status === 200) {
                                this.$message({
                                    type: 'success',
                                    showClose: true,
                                    message: '删除成功'
                                });
                                this.images.splice(index, 1);

                                if (this.imagesAll.length >= this.index + 1) {
                                    this.index += 1;
                                    this.images.push(this.imageAll[this.index]);
                                }
                                //this.showImage();
                            } else {
                                //console.log(response);
                                this.$alert("删除失败!");
                            }
                        })
                        .catch(error => {
                            //console.log(error);
                            this.$alert(error);
                        });

                }
            },


            setImage: function (image) {
                this.selectImage = image;
            },

            //cardClientDetail表格相关
            handleSizeChange: function (pagesize) {
                this.pagesize = pagesize;
            },
            handleCurrentChange: function (currentPage) {
                this.currentPage = currentPage;
            },


            //=======================================================================
            //初始化admin
            init_admin: function () {
                this.admin.adminId = 1;
                this.admin.adminPassword = '';
            },

            //int型id转化为6位string型code。失败返回字符串”error“。
            idToCode6: function (t_id) {
                var response = "";
                var count = t_id.toString().length;

                if (count == 1) {
                    response = "00000" + t_id.toString();
                } else if (count == 2) {
                    response = "0000" + t_id.toString();
                } else if (count == 3) {
                    response = "000" + t_id.toString();
                } else if (count == 4) {
                    response = "00" + t_id.toString();
                } else if (count == 5) {
                    response = "0" + t_id.toString();
                } else if (count == 6) {
                    response = t_id.toString();
                } else {
                    response = "error";
                }
                return response;
            },

            //6位string型code转化为int型id。失败返回NaN。
            codeToId: function (t_code) {
                var response = parseInt(t_code, 10);
                return response;
            },

            //=======================================================================


            //======================================================================
            //“登录页面”响应函数。初始化数据。
            loading: function () {
                //console.log("====loading======");			//测试代码
                //初始化
                this.init_admin();
                this.adminCode = window.location.href.split("=")[1];	//从网址获取code

                //登录校验。判断是否正确登录。
                if (this.codeToId(this.adminCode) != this.admin.adminId) {
                    this.$alert("非法登录！");
                    //console.log("getAdminCode error!");
                    return false;
                }

            },
            //========================== page common =========================================
            //工具栏(侧栏)响应函数
            select_one: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "work.html" + "?" + t_code;
            },
            select_two: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "signup.html" + "?" + t_code;
            },
            select_three: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "card_info.html" + "?" + t_code;
            },
            select_four: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "client_info.html" + "?" + t_code;
            },
            select_five: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "image_info.html" + "?" + t_code;
            },
            select_six: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "staff_info.html" + "?" + t_code;
            },
            select_seven: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "deal_consume_analyse.html" + "?" + t_code;
            },
            select_eight: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "deal_rebate_analyse.html" + "?" + t_code;
            },
            select_nine: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "deal_recharge_analyse.html" + "?" + t_code;
            },
            select_ten: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "deal_cost_analyse.html" + "?" + t_code;
            },
            select_eleven: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "deal_record.html" + "?" + t_code;
            },
            select_twelve: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "set.html" + "?" + t_code;
            },

            //"退出系统"响应函数
            exit: function () {
                //将退出标识由1变为0
                this.staff1.staffLogin = 0;
                //数据上传到后台
                var handle = this;	//供axios使用外层this
                axios.post(this.url + "staff/save", {
                    staffId: this.staff1.staffId,
                    staffQuestion: this.staff1.staffQuestion,
                    staffAnswer: this.staff1.staffAnswer,
                    staffIsAdmin: this.staff1.staffIsAdmin,
                    staffName: this.staff1.staffName,
                    staffPhone: this.staff1.staffPhone,
                    staffPassword: this.staff1.staffPassword,
                    staffLogin: this.staff1.staffLogin
                }).then(function (response) {
                    //响应处理
                    if (handle.staff1.staffId == response.data.staffId) {
                        //console.log("saveStuff Success");
                        //清空表单
                        window.location.href = "login.html";
                    } else {
                        handle.$alert("退出系统异常! 为了您的账号安全，请连接网络后重新退出！").catch(() => {
                        });
                        //console.log("saveStuff defeat");
                    }
                }).catch(function (error) {
                    //console.log(error);
                    handle.$alert("退出系统异常! 为了您的账号安全，请连接网络后重新退出！").catch(() => {
                    });
                });
            },
            init_staff: function () {
                var t_staff = {};
                t_staff.staffId = 0;
                t_staff.staffQuestion = '';
                t_staff.staffAnswer = '';
                t_staff.staffPassword = '';
                t_staff.staffIsAdmin = 0;
                t_staff.staffName = '';
                t_staff.staffPhone = '';
                t_staff.staffLogin = 0;
                return t_staff;
            },
            findStaffById: function (t_id) {
                //获取后台数据
                var handle = this; //供axios使用外层this
                axios.get(this.url + "staff/findById", {
                    params: {
                        id: t_id
                    }
                }).then(function (response) {
                    //业务处理
                    //console.log(response.data);		//测试代码
                    if (response.data == null) {
                        handle.$alert("没有该管理员信息!").catch(() => {
                        });
                        //console.log("can't find from server!!");
                    } else {
                        handle.staff1.staffId = response.data.staffId;
                        handle.staff1.staffQuestion = response.data.staffQuestion;
                        handle.staff1.staffAnswer = response.data.staffAnswer;
                        handle.staff1.staffPassword = response.data.staffPassword;
                        handle.staff1.staffIsAdmin = response.data.staffIsAdmin;
                        handle.staff1.staffName = response.data.staffName;
                        handle.staff1.staffPhone = response.data.staffPhone;
                        handle.staff1.staffLogin = response.data.staffLogin;
                    }
                }).catch(function (error) {
                    //console.log(error);
                });
            }

        }
    });
    v1.showImage();

}
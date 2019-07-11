window.onload = function () {
//========================================================================================================	
    var v1 = new Vue({
        el: '#app',
        data: {
            staff: {
                staffId: 0,
                staffQuestion: '',
                staffAnswer: '',
                staffPassword: '',
                staffIsAdmin: 0,
                staffName: '',
                staffPhone: '',
                staffLogin: 0
            },
            staffForm: { //与表单绑定的staff
                staffCode: '',
                staffQuestion: '',
                staffAnswer: '',
                staffPassword: '',
                staffPassword2: ''
            },
            //表单验证规则
            rules: {
                staffCode: [
                    {required: true, message: '请输入登录账号', trigger: 'blur'},
                    {pattern: /^[0-9]{6,6}$/, message: '登录账号账号为6为数字', trigger: 'blur'}
                ],
                staffAnswer: [
                    {required: true, message: '请输入密保答案', trigger: 'blur'}
                ],
                staffPassword: [
                    {required: true, message: '请输入新密码密码', trigger: 'blur'},
                    {min: 6, max: 20, message: '新密码长度为6-20位', trigger: 'blur'}
                ],
                staffPassword2: [
                    {required: true, message: '请再次输入新密码', trigger: 'blur'},
                    {min: 6, max: 20, message: '新密码长度为6-20位', trigger: 'blur'}
                ]
            },

            url: "/spring/"
            //url: "http://10.236.235.240:8081/spring/"
        },
        methods: {
            //==========================common=========================================
            //初始化staff
            init_staff: function () {
                var t_staff = {};
                t_staff.staffId = 0;
                t_staff.staffQuestion = '';
                t_staff.staffAnswer = '';
                t_staff.taffPassword = '';
                t_staff.staffIsAdmin = 0;
                t_staff.staffName = '';
                t_staff.staffPhone = '';
                t_staff.staffLogin = 0;
                return t_staff;
            },

            //6位string型code转化为int型id。
            codeToId6: function (t_code) {
                var response = parseInt(t_code, 10);
                return response;
            },

            //==========================Login==========================================
            //"输入账号后"延迟响应函数
            delayResponse: function () {
                //数据预处理
                var t_id = this.codeToId6(this.staffForm.staffCode);
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
                        console.log("can't find from server!");
                        return false;
                    } else {
                        handle.staff.staffId = response.data.staffId;
                        handle.staff.staffQuestion = response.data.staffQuestion;
                        handle.staff.staffAnswer = response.data.staffAnswer;
                        handle.staff.staffPassword = response.data.staffPassword;
                        handle.staff.staffIsAdmin = response.data.staffIsAdmin;
                        handle.staff.staffName = response.data.staffName;
                        handle.staff.staffPhone = response.data.staffPhone;
                        handle.staff.staffLogin = response.data.staffLogin;

                        handle.staffForm.staffQuestion = response.data.staffQuestion;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //"提交"按钮响应函数
            submitForm: function (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (this.staff.staffId == 0) {
                            this.$alert("无该登录账号!").catch(() => {
                            });
                            console.log("don't have this stuff!");
                            return false;
                        } else if (this.staffForm.staffPassword != this.staffForm.staffPassword2) {
                            this.$alert("两次输入密码不一致！").catch(() => {
                            });
                            console.log("password and password2 is not equit!");
                            return false;
                        } else if (this.staffForm.staffAnswer != this.staff.staffAnswer) {
                            this.$alert("密保答案不正确！").catch(() => {
                            });
                            console.log("Question is not right!");
                            return false;
                        } else {
                            //数据上传到后台
                            var handle = this;	//供axios使用外层this
                            axios.post(this.url + "staff/save", {
                                staffId: this.staff.staffId,
                                staffQuestion: this.staff.staffQuestion,
                                staffAnswer: this.staff.staffAnswer,
                                staffIsAdmin: this.staff.staffIsAdmin,
                                staffName: this.staff.staffName,
                                staffPhone: this.staff.staffPhone,
                                staffPassword: this.staffForm.staffPassword,
                                staffLogin: this.staff.staffLogin
                            }).then(function (response) {
                                //响应处理
                                if (handle.staff.staffId == response.data.staffId) {
                                    handle.$alert("修改成功!").catch(() => {
                                    });
                                    console.log("saveStuff Success");
                                    //清空表单
                                    handle.resetForm('selectForm');
                                } else {
                                    handle.$alert("修改失败!").catch(() => {
                                    });
                                    console.log("saveStuff defeat");
                                }
                            }).catch(function (error) {
                                console.log(error);
                            });
                        }
                    } else {
                        return false;
                    }
                });
            },

            //"重置"按钮响应函数
            resetForm: function (formName) {
                //清初表单验证提示并初始化staffForm
                this.$refs[formName].resetFields();
                this.staffForm.staffQuestion = '';	//staffQuestion表单验证，resetFields无法重置，需手工重置。
                //初始化staff
                this.staff = this.init_staff();
            }
            //========================== End ==========================================
        },
        //使用watch来响应数据的变化，监听页面
        //监听data的temp变量 		temp:function(){}
        //监听data的tempForm结构体的temp变量		'tempForm.temp':function(){}
        //配合lodash.js的_.debounce函数可以实现延迟响应
        watch: {
            'staffForm.staffCode': _.debounce(function () {
                if (this.staffForm.staffCode != '' && /^[0-9]{6,6}$/.test(this.staffForm.staffCode) == true) {
                    this.delayResponse();
                }
            }, 500)
        }
    });
}
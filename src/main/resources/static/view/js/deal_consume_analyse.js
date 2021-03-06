window.onload = function () {
    v1 = new Vue({
        el: '#app',

        data() {
            var handle = this

            this.money_events = {
                click: function (e) {
                    //console.log(e)		//测试代码

                    if (e.name.indexOf('星期') >= 0) {
                        for (var i = 0; i < handle.money_weekData.rows.length; i++) {
                            if (handle.money_weekData.rows[i].consumeDate.indexOf(e.name) >= 0) {
                                handle.money_context = handle.money_weekData.rows[i].consumeDate
                                handle.money_should_pieData.rows[0].money = handle.money_weekData.rows[i].chlid_should_money
                                handle.money_should_pieData.rows[1].money = handle.money_weekData.rows[i].youth_should_money
                                handle.money_should_pieData.rows[2].money = handle.money_weekData.rows[i].mid_should_money
                                handle.money_should_pieData.rows[3].money = handle.money_weekData.rows[i].old_should_money
                                handle.money_real_pieData.rows[0].money = handle.money_weekData.rows[i].chlid_real_money
                                handle.money_real_pieData.rows[1].money = handle.money_weekData.rows[i].youth_real_money
                                handle.money_real_pieData.rows[2].money = handle.money_weekData.rows[i].mid_real_money
                                handle.money_real_pieData.rows[3].money = handle.money_weekData.rows[i].old_real_money
                                break
                            }
                        }
                    } else {
                        for (var i = 0; i < handle.money_monthData.rows.length; i++) {
                            if (handle.money_monthData.rows[i].consumeDate.indexOf(e.name) >= 0) {
                                handle.money_context = handle.money_monthData.rows[i].consumeDate
                                handle.money_should_pieData.rows[0].money = handle.money_monthData.rows[i].chlid_should_money
                                handle.money_should_pieData.rows[1].money = handle.money_monthData.rows[i].youth_should_money
                                handle.money_should_pieData.rows[2].money = handle.money_monthData.rows[i].mid_should_money
                                handle.money_should_pieData.rows[3].money = handle.money_monthData.rows[i].old_should_money
                                handle.money_real_pieData.rows[0].money = handle.money_monthData.rows[i].chlid_real_money
                                handle.money_real_pieData.rows[1].money = handle.money_monthData.rows[i].youth_real_money
                                handle.money_real_pieData.rows[2].money = handle.money_monthData.rows[i].mid_real_money
                                handle.money_real_pieData.rows[3].money = handle.money_monthData.rows[i].old_real_money
                                break
                            }
                        }
                    }

                    handle.money_pieShow = true
                }
            }

            this.num_events = {
                click: function (e) {
                    //console.log(e)		//测试代码

                    if (e.name.indexOf('星期') >= 0) {
                        for (var i = 0; i < handle.num_weekData.rows.length; i++) {
                            if (handle.num_weekData.rows[i].consumeDate.indexOf(e.name) >= 0) {
                                handle.num_context = handle.num_weekData.rows[i].consumeDate
                                handle.num_pieData.rows[0].num = handle.num_weekData.rows[i].chlid_num
                                handle.num_pieData.rows[1].num = handle.num_weekData.rows[i].youth_num
                                handle.num_pieData.rows[2].num = handle.num_weekData.rows[i].mid_num
                                handle.num_pieData.rows[3].num = handle.num_weekData.rows[i].old_num
                                break
                            }
                        }
                    } else {
                        for (var i = 0; i < handle.num_monthData.rows.length; i++) {
                            if (handle.num_monthData.rows[i].consumeDate.indexOf(e.name) >= 0) {
                                handle.num_context = handle.num_monthData.rows[i].consumeDate
                                handle.num_pieData.rows[0].num = handle.num_monthData.rows[i].chlid_num
                                handle.num_pieData.rows[1].num = handle.num_monthData.rows[i].youth_num
                                handle.num_pieData.rows[2].num = handle.num_monthData.rows[i].mid_num
                                handle.num_pieData.rows[3].num = handle.num_monthData.rows[i].old_num
                                break
                            }
                        }
                    }

                    handle.num_pieShow = true
                }
            }

            //主体数据
            return {
                url: "http://127.0.0.1:8080/spring/",
                //url: "http://10.241.145.235:8081/spring/",
                activeName: "money",

                //=====管理员相关==================================
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

                money_monthData: {
                    columns: ['consumeDate', 'all_should_money', 'all_deduct_money', 'all_real_money'],
                    rows: [
                        {
                            'consumeDate': '2019年06月01日',
                            'all_should_money': 0.00,
                            'all_deduct_money': 0.00,
                            'all_real_money': 0.00,
                            'chlid_should_money': 0.00,
                            'chlid_deduct_money': 0.00,
                            'chlid_real_money': 0.00,
                            'youth_should_money': 0.00,
                            'youth_deduct_money': 0.00,
                            'youth_real_money': 0.00,
                            'mid_should_money': 0.00,
                            'mid_deduct_money': 0.00,
                            'mid_real_money': 0.00,
                            'old_should_money': 0.00,
                            'old_deduct_money': 0.00,
                            'old_real_money': 0.00
                        }	//测试数据
                    ]
                },

                money_weekData: {
                    columns: ['consumeDate', 'all_real_money', 'all_deduct_money', 'all_should_money'],
                    rows: [
                        {
                            'consumeDate': '2019年01周星期日',
                            'all_should_money': 0.00,
                            'all_deduct_money': 0.00,
                            'all_real_money': 0.00,
                            'chlid_should_money': 0.00,
                            'chlid_deduct_money': 0.00,
                            'chlid_real_money': 0.00,
                            'youth_should_money': 0.00,
                            'youth_deduct_money': 0.00,
                            'youth_real_money': 0.00,
                            'mid_should_money': 0.00,
                            'mid_deduct_money': 0.00,
                            'mid_real_money': 0.00,
                            'old_should_money': 0.00,
                            'old_deduct_money': 0.00,
                            'old_real_money': 0.00
                        },
                        {
                            'consumeDate': '2019年01周星期一',
                            'all_should_money': 0.00,
                            'all_deduct_money': 0.00,
                            'all_real_money': 0.00,
                            'chlid_should_money': 0.00,
                            'chlid_deduct_money': 0.00,
                            'chlid_real_money': 0.00,
                            'youth_should_money': 0.00,
                            'youth_deduct_money': 0.00,
                            'youth_real_money': 0.00,
                            'mid_should_money': 0.00,
                            'mid_deduct_money': 0.00,
                            'mid_real_money': 0.00,
                            'old_should_money': 0.00,
                            'old_deduct_money': 0.00,
                            'old_real_money': 0.00
                        },
                        {
                            'consumeDate': '2019年01周星期二',
                            'all_should_money': 0.00,
                            'all_deduct_money': 0.00,
                            'all_real_money': 0.00,
                            'chlid_should_money': 0.00,
                            'chlid_deduct_money': 0.00,
                            'chlid_real_money': 0.00,
                            'youth_should_money': 0.00,
                            'youth_deduct_money': 0.00,
                            'youth_real_money': 0.00,
                            'mid_should_money': 0.00,
                            'mid_deduct_money': 0.00,
                            'mid_real_money': 0.00,
                            'old_should_money': 0.00,
                            'old_deduct_money': 0.00,
                            'old_real_money': 0.00
                        },
                        {
                            'consumeDate': '2019年01周星期三',
                            'all_should_money': 0.00,
                            'all_deduct_money': 0.00,
                            'all_real_money': 0.00,
                            'chlid_should_money': 0.00,
                            'chlid_deduct_money': 0.00,
                            'chlid_real_money': 0.00,
                            'youth_should_money': 0.00,
                            'youth_deduct_money': 0.00,
                            'youth_real_money': 0.00,
                            'mid_should_money': 0.00,
                            'mid_deduct_money': 0.00,
                            'mid_real_money': 0.00,
                            'old_should_money': 0.00,
                            'old_deduct_money': 0.00,
                            'old_real_money': 0.00
                        },
                        {
                            'consumeDate': '2019年01周星期四',
                            'all_should_money': 0.00,
                            'all_deduct_money': 0.00,
                            'all_real_money': 0.00,
                            'chlid_should_money': 0.00,
                            'chlid_deduct_money': 0.00,
                            'chlid_real_money': 0.00,
                            'youth_should_money': 0.00,
                            'youth_deduct_money': 0.00,
                            'youth_real_money': 0.00,
                            'mid_should_money': 0.00,
                            'mid_deduct_money': 0.00,
                            'mid_real_money': 0.00,
                            'old_should_money': 0.00,
                            'old_deduct_money': 0.00,
                            'old_real_money': 0.00
                        },
                        {
                            'consumeDate': '2019年01周星期五',
                            'all_should_money': 0.00,
                            'all_deduct_money': 0.00,
                            'all_real_money': 0.00,
                            'chlid_should_money': 0.00,
                            'chlid_deduct_money': 0.00,
                            'chlid_real_money': 0.00,
                            'youth_should_money': 0.00,
                            'youth_deduct_money': 0.00,
                            'youth_real_money': 0.00,
                            'mid_should_money': 0.00,
                            'mid_deduct_money': 0.00,
                            'mid_real_money': 0.00,
                            'old_should_money': 0.00,
                            'old_deduct_money': 0.00,
                            'old_real_money': 0.00
                        },
                        {
                            'consumeDate': '2019年01周星期六',
                            'all_should_money': 0.00,
                            'all_deduct_money': 0.00,
                            'all_real_money': 0.00,
                            'chlid_should_money': 0.00,
                            'chlid_deduct_money': 0.00,
                            'chlid_real_money': 0.00,
                            'youth_should_money': 0.00,
                            'youth_deduct_money': 0.00,
                            'youth_real_money': 0.00,
                            'mid_should_money': 0.00,
                            'mid_deduct_money': 0.00,
                            'mid_real_money': 0.00,
                            'old_should_money': 0.00,
                            'old_deduct_money': 0.00,
                            'old_real_money': 0.00
                        }
                    ]
                },

                money_grid: {
                    show: true,
                    top: 40,
                    bottom: 25,
                    left: 60,
                    right: 60,
                    backgroundColor: '#FBFBFB',
                    borderColor: '#A9A9A9'
                },

                money_colors: ['#409EFF', '#909399', '#101010'],


                money_lineSets: {
                    labelMap: {				//设置指标的别名
                        consumeDate: '日期',
                        all_should_money: '应收金额',
                        all_deduct_money: '抵扣金额',
                        all_real_money: '实收金额',
                        chlid_should_money: '儿童应收金额',
                        chlid_deduct_money: '儿童抵扣金额',
                        chlid_real_money: '儿童实收金额',
                        youth_should_money: '青年应收金额',
                        youth_deduct_money: '青年抵扣金额',
                        youth_real_money: '青年实收金额',
                        mid_should_money: '中年应收金额',
                        mid_deduct_money: '中年抵扣金额',
                        mid_real_money: '中年实收金额',
                        old_should_money: '老年应收金额',
                        old_deduct_money: '老年抵扣金额',
                        old_real_money: '老年实收金额'
                    },

                    metrics: [, 'all_real_money', 'all_deduct_money', 'all_should_money'],	//设置显示的指标维度
                    dimension: ['consumeDate']      //设置显示的指标维度
                },

                money_histogramSets: {
                    labelMap: {				//设置指标的别名
                        consumeDate: '日期',
                        all_should_money: '应收金额',
                        all_deduct_money: '抵扣金额',
                        all_real_money: '实收金额',
                        chlid_should_money: '儿童应收金额',
                        chlid_deduct_money: '儿童抵扣金额',
                        chlid_real_money: '儿童实收金额',
                        youth_should_money: '青年应收金额',
                        youth_deduct_money: '青年抵扣金额',
                        youth_real_money: '青年实收金额',
                        mid_should_money: '中年应收金额',
                        mid_deduct_money: '中年抵扣金额',
                        mid_real_money: '中年实收金额',
                        old_should_money: '老年应收金额',
                        old_deduct_money: '老年抵扣金额',
                        old_real_money: '老年实收金额'
                    },

                    metrics: ['all_real_money', 'all_deduct_money'],	//设置显示的指标维度
                    dimension: ['consumeDate'],        		//设置显示的指标维度

                    stack: {'all_should_money': ['all_real_money', 'all_deduct_money']},		//堆叠柱状图

                    opacity: 1			 	//柱状图为非透明

                },

                money_select: '按月查看',

                money_findByMonthDate: '',
                money_currentMonth: '',
                money_totalMonthConsume: 0.00,
                money_totalMonthRealConsume: 0.00,
                money_monthShow: true,
                money_monthHShow: true,
                money_monthLShow: false,

                money_findByWeekDate: '',
                money_currentWeek: '',
                money_totalWeekConsume: 0.00,
                money_totalWeekRealConsume: 0.00,
                money_weekShow: false,
                money_weekHShow: true,
                money_weekLShow: false,


                num_monthData: {
                    columns: ['consumeDate', 'all_num'],
                    rows: [
                        {
                            'consumeDate': '2019年06月01日',
                            'all_num': 0,
                            'chlid_num': 0,
                            'youth_num': 0,
                            'mid_num': 0,
                            'old_num': 0
                        }		//测试数据
                    ]
                },

                num_weekData: {
                    columns: ['consumeDate', 'all_num'],
                    rows: [
                        {
                            'consumeDate': '2019年01周星期日',
                            'all_num': 0,
                            'chlid_num': 0,
                            'youth_num': 0,
                            'mid_num': 0,
                            'old_num': 0
                        },
                        {
                            'consumeDate': '2019年01周星期一',
                            'all_num': 0,
                            'chlid_num': 0,
                            'youth_num': 0,
                            'mid_num': 0,
                            'old_num': 0
                        },
                        {
                            'consumeDate': '2019年01周星期二',
                            'all_num': 0,
                            'chlid_num': 0,
                            'youth_num': 0,
                            'mid_num': 0,
                            'old_num': 0
                        },
                        {
                            'consumeDate': '2019年01周星期三',
                            'all_num': 0,
                            'chlid_num': 0,
                            'youth_num': 0,
                            'mid_num': 0,
                            'old_num': 0
                        },
                        {
                            'consumeDate': '2019年01周星期四',
                            'all_num': 0,
                            'chlid_num': 0,
                            'youth_num': 0,
                            'mid_num': 0,
                            'old_num': 0
                        },
                        {
                            'consumeDate': '2019年01周星期五',
                            'all_num': 0,
                            'chlid_num': 0,
                            'youth_num': 0,
                            'mid_num': 0,
                            'old_num': 0
                        },
                        {
                            'consumeDate': '2019年01周星期六',
                            'all_num': 0,
                            'chlid_num': 0,
                            'youth_num': 0,
                            'mid_num': 0,
                            'old_num': 0
                        }
                    ]
                },

                num_grid: {
                    show: true,
                    top: 40,
                    bottom: 25,
                    left: 60,
                    right: 60,
                    backgroundColor: '#FBFBFB',
                    borderColor: '#A9A9A9'
                },

                num_colors: ['#F56C6C'],

                num_extend: {
                    series: {
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        }
                    }
                },

                num_lineSets: {
                    labelMap: {
                        consumeDate: '日期',
                        all_num: '总笔数',
                        chlid_num: '儿童笔数',
                        youth_num: '青年笔数',
                        mid_num: '中年笔数',
                        old_num: '老年笔数'
                    }
                },

                //笔数相关-柱状图:设置
                num_histogramSets: {
                    labelMap: {
                        consumeDate: '日期',
                        all_num: '总笔数',
                        chlid_num: '儿童笔数',
                        youth_num: '青年笔数',
                        mid_num: '中年笔数',
                        old_num: '老年笔数'
                    },
                    opacity: 1
                },

                num_select: '按月查看',

                num_findByMonthDate: '',
                num_currentMonth: '',
                num_totalMonthConsume: 0,
                num_monthShow: true,
                num_monthHShow: true,
                num_monthLShow: false,

                num_findByWeekDate: '',
                num_currentWeek: '',
                num_totalWeekConsume: 0,
                num_weekShow: false,
                num_weekHShow: true,
                num_weekLShow: false,


                money_should_pieData: {
                    columns: ['age', 'money'],
                    rows: [
                        {'age': '儿童', 'money': 10.00},
                        {'age': '青年', 'money': 20.00},
                        {'age': '中年', 'money': 30.00},
                        {'age': '老年', 'money': 40.00}
                    ]
                },


                money_real_pieData: {
                    columns: ['age', 'money'],
                    rows: [
                        {'age': '儿童', 'money': 10.00},
                        {'age': '青年', 'money': 15.00},
                        {'age': '中年', 'money': 25.00},
                        {'age': '老年', 'money': 40.00}
                    ]
                },


                num_pieData: {
                    columns: ['age', 'num'],
                    rows: [
                        {'age': '儿童', 'num': 1},
                        {'age': '青年', 'num': 2},
                        {'age': '中年', 'num': 3},
                        {'age': '老年', 'num': 4}
                    ]
                },

                pie_colors: ['#FF0000', '#FFD700', '#1E90FF', '#8B008B'],

                pie_sets: {
                    selectedMode: 'single',
                    hoverAnimation: false
                },

                money_pieShow: false,
                money_context: '',
                num_pieShow: false,
                num_context: '',

                //==============================end==================
            }
        },
        methods: {
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
                this.staff.staffLogin = 0;
                //数据上传到后台
                var handle = this;	//供axios使用外层this
                axios.post(this.url + "staff/save", {
                    staffId: this.staff.staffId,
                    staffQuestion: this.staff.staffQuestion,
                    staffAnswer: this.staff.staffAnswer,
                    staffIsAdmin: this.staff.staffIsAdmin,
                    staffName: this.staff.staffName,
                    staffPhone: this.staff.staffPhone,
                    staffPassword: this.staff.staffPassword,
                    staffLogin: this.staff.staffLogin
                }).then(function (response) {
                    //响应处理
                    if (handle.staff.staffId == response.data.staffId) {
                        console.log("saveStuff Success");
                        //清空表单
                        window.location.href = "login.html";
                    } else {
                        handle.$alert("退出系统异常! 为了您的账号安全，请连接网络后重新退出！").catch(() => {
                        });
                        console.log("saveStuff defeat");
                    }
                }).catch(function (error) {
                    console.log(error);
                    handle.$alert("退出系统异常! 为了您的账号安全，请连接网络后重新退出！").catch(() => {
                    });
                });
            },

            //========================== common ======================================
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
            codeToId6: function (t_code) {
                var response = parseInt(t_code, 10);
                return response;
            },

            //初始化staff
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

            getDayNumber: function (t_year, t_month) {
                var year = parseInt(t_year, 10);
                var month = parseInt(t_month, 10);
                var day = 0;
                switch (month) {
                    case 1:
                        day = 31;
                        break;
                    case 3:
                        day = 31;
                        break;
                    case 5:
                        day = 31;
                        break;
                    case 7:
                        day = 31;
                        break;
                    case 8:
                        day = 31;
                        break;
                    case 10:
                        day = 31;
                        break;
                    case 12:
                        day = 31;
                        break;
                    case 4:
                        day = 30;
                        break;
                    case 6:
                        day = 30;
                        break;
                    case 9:
                        day = 30;
                        break;
                    case 11:
                        day = 30;
                        break;
                    case 2:
                        if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
                            day = 29;
                        } else {
                            day = 28;
                        }
                        break;
                    default:
                        console.log("getDayNumber error!");
                }
                return day;
            },

            dateStep: function (sDate1, sDate2) {
                var date1 = Date.parse(sDate1);
                var date2 = Date.parse(sDate2);
                var dateSpan = date2 - date1;
                var days = 0;
                if (dateSpan > 0) {
                    days = Math.floor(dateSpan / (24 * 3600 * 1000));
                } else {
                    dateSpan = Math.abs(dateSpan);
                    days = Math.floor(dateSpan / (24 * 3600 * 1000));
                    days = 0 - days;
                }
                return days;
            },

            getWeek: function (t_year, t_month, t_day) {

                var t_date = new Date(t_year, t_month, t_day);
                var t_weekday = t_date.getDay();

                var saturday = new Date(t_year, t_month, t_day);
                saturday.setDate(saturday.getDate() - t_weekday + 6);

                var firstDay = new Date(saturday.getFullYear(), 0, 1);
                var first_weekday = firstDay.getDay();

                var first_saturday = new Date(firstDay.getFullYear(), 0, 1);
                first_saturday.setDate(first_saturday.getDate() - first_weekday + 6);

                var begin_time = '';
                if (first_weekday != 5 && first_weekday != 6) {
                    var begin_year = first_saturday.getFullYear();
                    var begin_month = first_saturday.getMonth() + 1;
                    var begin_day = first_saturday.getDate();
                    if (begin_month >= 0 && begin_month <= 9) {
                        begin_month = "0" + begin_month.toString();
                    }
                    if (begin_day >= 0 && begin_day <= 9) {
                        begin_day = "0" + begin_day.toString();
                    }
                    begin_time = begin_year + "-" + begin_month + "-" + begin_day;
                    //console.log("===pass1===");
                } else {
                    if (saturday.getFullYear() == first_saturday.getFullYear() &&
                        saturday.getMonth() == first_saturday.getMonth() &&
                        saturday.getDate() == first_saturday.getDate()) {

                        //获取last_year
                        var t_str = first_saturday.getFullYear();
                        var t_int = parseInt(t_str, 10) - 1;
                        var last_year = t_int.toString();

                        //创建last_firstDay
                        var last_firstDay = new Date(last_year, 0, 1);
                        var last_first_weekday = last_firstDay.getDay();

                        //创建last_first_saturday
                        var last_first_saturday = new Date(last_firstDay.getFullYear(), 0, 1);
                        last_first_saturday.setDate(last_first_saturday.getDate() - last_first_weekday + 6);

                        if (last_first_weekday != 5 && last_first_weekday != 6) {
                            var begin_year = last_first_saturday.getFullYear();
                            var begin_month = last_first_saturday.getMonth() + 1;
                            var begin_day = last_first_saturday.getDate();
                            if (begin_month >= 0 && begin_month <= 9) {
                                begin_month = "0" + begin_month.toString();
                            }
                            if (begin_day >= 0 && begin_day <= 9) {
                                begin_day = "0" + begin_day.toString();
                            }
                            begin_time = begin_year + "-" + begin_month + "-" + begin_day;
                            //console.log("===pass4===");

                        } else {
                            var temp_date = new Date(last_first_saturday.getFullYear(), last_first_saturday.getMonth(), last_first_saturday.getDate());
                            var temp_weekday = temp_date.getDay();
                            temp_date.setDate(temp_date.getDate() - temp_weekday + 6 + 7); 	//下一周
                            var begin_year = temp_date.getFullYear();
                            var begin_month = temp_date.getMonth() + 1;
                            var begin_day = temp_date.getDate();
                            if (begin_month >= 0 && begin_month <= 9) {
                                begin_month = "0" + begin_month.toString();
                            }
                            if (begin_day >= 0 && begin_day <= 9) {
                                begin_day = "0" + begin_day.toString();
                            }
                            begin_time = begin_year + "-" + begin_month + "-" + begin_day;
                            //console.log("===pass5===");
                        }

                    } else {
                        var temp_date = new Date(first_saturday.getFullYear(), first_saturday.getMonth(), first_saturday.getDate());
                        var temp_weekday = temp_date.getDay();
                        temp_date.setDate(temp_date.getDate() - temp_weekday + 6 + 7); 	//下一周

                        var begin_year = temp_date.getFullYear();
                        var begin_month = temp_date.getMonth() + 1;
                        var begin_day = temp_date.getDate();
                        if (begin_month >= 0 && begin_month <= 9) {
                            begin_month = "0" + begin_month.toString();
                        }
                        if (begin_day >= 0 && begin_day <= 9) {
                            begin_day = "0" + begin_day.toString();
                        }
                        begin_time = begin_year + "-" + begin_month + "-" + begin_day;
                        //console.log("===pass2===");
                    }
                }

                var end_time = '';
                var end_year = saturday.getFullYear();
                var end_month = saturday.getMonth() + 1;
                var end_day = saturday.getDate();
                if (end_month >= 0 && end_month <= 9) {
                    end_month = "0" + end_month.toString();
                }
                if (end_day >= 0 && end_day <= 9) {
                    end_day = "0" + end_day.toString();
                }
                end_time = end_year + "-" + end_month + "-" + end_day;

                var days = this.dateStep(begin_time, end_time);
                var year = begin_time.split("-")[0];
                var week = 0;
                var res = '';
                if (days >= 0 && days % 7 == 0) {
                    week = (days / 7) + 1;
                    if (week >= 0 && week <= 9) {
                        res = year + "-" + "0" + week.toString();
                    } else {
                        res = year + "-" + week.toString();
                    }
                } else {
                    console.log("there is a bug");
                    res = "error";
                }

                return res;
            },

            getDateByWeek: function (t_week) {
                var t_year = t_week.split("-")[0];
                var t_week = parseInt(t_week.split("-")[1], 10);

                var firstDay = new Date(t_year, 0, 1);
                var first_weekday = firstDay.getDay();

                var first_saturday = new Date(firstDay.getFullYear(), 0, 1);
                first_saturday.setDate(first_saturday.getDate() - first_weekday + 6);


                //计算起始时间begin_time
                var begin_time = '';
                if (first_weekday != 5 && first_weekday != 6) {
                    var begin_year = first_saturday.getFullYear();
                    var begin_month = first_saturday.getMonth() + 1;
                    var begin_day = first_saturday.getDate();
                    if (begin_month >= 0 && begin_month <= 9) {
                        begin_month = "0" + begin_month.toString();
                    }
                    if (begin_day >= 0 && begin_day <= 9) {
                        begin_day = "0" + begin_day.toString();
                    }
                    begin_time = begin_year + "-" + begin_month + "-" + begin_day;
                } else {
                    var temp_date = new Date(first_saturday.getFullYear(), first_saturday.getMonth(), first_saturday.getDate());
                    var temp_weekday = temp_date.getDay();
                    temp_date.setDate(temp_date.getDate() - temp_weekday + 6 + 7); 	//下一周
                    var begin_year = temp_date.getFullYear();
                    var begin_month = temp_date.getMonth() + 1;
                    var begin_day = temp_date.getDate();
                    if (begin_month >= 0 && begin_month <= 9) {
                        begin_month = "0" + begin_month.toString();
                    }
                    if (begin_day >= 0 && begin_day <= 9) {
                        begin_day = "0" + begin_day.toString();
                    }
                    begin_time = begin_year + "-" + begin_month + "-" + begin_day;
                }

                //计算结束日期endDate(星期六), endDate = begin_time + (t_week-1)*7
                var endDate = new Date(begin_time);
                var endWeek = endDate.getDay();
                endDate.setDate(endDate.getDate() - endWeek + 6 + (t_week - 1) * 7);
                var end_year = endDate.getFullYear();
                var end_month = endDate.getMonth() + 1;
                var end_day = endDate.getDate();
                if (end_month >= 0 && end_month <= 9) {
                    end_month = "0" + end_month.toString();
                }
                if (end_day >= 0 && end_day <= 9) {
                    end_day = "0" + end_day.toString();
                }
                end_time = end_year + "-" + end_month + "-" + end_day;

                //计算开始日期startDate(星期日), startDate = begin_time + (t_week-2)*7+1
                var startDate = new Date(begin_time);
                var startWeek = startDate.getDay();
                startDate.setDate(startDate.getDate() - startWeek + 6 + (t_week - 2) * 7 + 1);
                var start_year = startDate.getFullYear();
                var start_month = startDate.getMonth() + 1;
                var start_day = startDate.getDate();
                if (start_month >= 0 && start_month <= 9) {
                    start_month = "0" + start_month.toString();
                }
                if (start_day >= 0 && start_day <= 9) {
                    start_day = "0" + start_day.toString();
                }
                start_time = start_year + "-" + start_month + "-" + start_day;

                return start_time + " " + end_time;
            },

            //获取当前时间:格式年-月-日
            getNowDay: function () {
                var date = new Date(); 								//创建时间对象
                var year = date.getFullYear(); 						//获取年
                var month = date.getMonth() + 1;						//获取月
                var day = date.getDate(); 							//获取当日

                if (month >= 0 && month <= 9) {
                    month = "0" + month.toString();
                }
                if (day >= 0 && day <= 9) {
                    day = "0" + day.toString();
                }
                var nowDate = year + "-" + month + "-" + day; //组合时间
                return nowDate;
            },

            //获取当前周次:格式年-周
            getNowWeek: function () {
                var date = new Date(); 						//创建时间对象
                var year = date.getFullYear(); 				//获取年
                var month = date.getMonth();				//获取月
                var day = date.getDate(); 					//获取当日
                var nowWeek = this.getWeek(year, month, day);	//获取当天在该年的周次
                return nowWeek;
            },

            //初始化money_monthData图表数据。
            init_moneyMonthData: function (t_year, t_month, t_day) {
                //清除之前图表数据
                while (this.money_monthData.rows != 0) {
                    this.money_monthData.rows.pop();
                }

                //添加t_day个空json
                var t_data = {};
                var day = '';
                var date = '';
                var money = 0.00;

                for (var i = 1; i <= t_day; i++) {
                    if (i > 0 && i < 10) {
                        day = "0" + i.toString();
                    } else {
                        day = i.toString();
                    }
                    date = t_year + "年" + t_month + "月" + day + "日";
                    t_data = {
                        'consumeDate': date,
                        'all_should_money': money,
                        'all_deduct_money': money,
                        'all_real_money': money,
                        'chlid_should_money': money,
                        'chlid_deduct_money': money,
                        'chlid_real_money': money,
                        'youth_should_money': money,
                        'youth_deduct_money': money,
                        'youth_real_money': money,
                        'mid_should_money': money,
                        'mid_deduct_money': money,
                        'mid_real_money': money,
                        'old_should_money': money,
                        'old_deduct_money': money,
                        'old_real_money': money
                    };
                    this.money_monthData.rows.push(t_data);
                }
            },

            //初始化money_weekData图表数据。
            init_moneyWeekData: function (t_year, t_week) {
                //初始化图表数据
                var temp = '';
                for (var i = 0; i < 7; i++) {
                    temp = this.money_weekData.rows[i].consumeDate.split("周")[1];
                    this.money_weekData.rows[i].consumeDate = t_year + "年" + t_week + "周" + temp;
                    this.money_weekData.rows[i].all_should_money = 0.00;
                    this.money_weekData.rows[i].all_deduct_money = 0.00;
                    this.money_weekData.rows[i].all_real_money = 0.00;
                    this.money_weekData.rows[i].chlid_should_money = 0.00;
                    this.money_weekData.rows[i].chlid_deduct_money = 0.00;
                    this.money_weekData.rows[i].chlid_real_money = 0.00;
                    this.money_weekData.rows[i].youth_should_money = 0.00;
                    this.money_weekData.rows[i].youth_deduct_money = 0.00;
                    this.money_weekData.rows[i].youth_real_money = 0.00;
                    this.money_weekData.rows[i].mid_should_money = 0.00;
                    this.money_weekData.rows[i].mid_deduct_money = 0.00;
                    this.money_weekData.rows[i].mid_real_money = 0.00;
                    this.money_weekData.rows[i].old_should_money = 0.00;
                    this.money_weekData.rows[i].old_deduct_money = 0.00;
                    this.money_weekData.rows[i].old_real_money = 0.00;
                }
            },

            //初始化num_monthData图表数据。
            init_numMonthData: function (t_year, t_month, t_day) {
                //清除之前图表数据
                while (this.num_monthData.rows != 0) {
                    this.num_monthData.rows.pop();
                }

                //添加t_day个空json
                var t_data = {};
                var day = '';
                var date = '';
                var num = 0;

                for (var i = 1; i <= t_day; i++) {
                    if (i > 0 && i < 10) {
                        day = "0" + i.toString();
                    } else {
                        day = i.toString();
                    }
                    date = t_year + "年" + t_month + "月" + day + "日";
                    t_data = {
                        'consumeDate': date,
                        'all_num': num,
                        'chlid_num': num,
                        'youth_num': num,
                        'mid_num': num,
                        'old_num': num
                    };
                    this.num_monthData.rows.push(t_data);
                }
            },

            //初始化num_weekData图表数据。
            init_numWeekData: function (t_year, t_week) {
                //初始化图表数据
                var temp = '';
                for (var i = 0; i < 7; i++) {
                    temp = this.num_weekData.rows[i].consumeDate.split("周")[1];
                    this.num_weekData.rows[i].consumeDate = t_year + "年" + t_week + "周" + temp;
                    this.num_weekData.rows[i].all_num = 0;
                    this.num_weekData.rows[i].chlid_num = 0;
                    this.num_weekData.rows[i].youth_num = 0;
                    this.num_weekData.rows[i].mid_num = 0;
                    this.num_weekData.rows[i].old_num = 0;
                }
            },

            //========================== 后台交互 ======================================
            //账户信息：通过编号获取管理员信息。
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
                        console.log("can't find from server!!");
                    } else {
                        handle.staff.staffId = response.data.staffId;
                        handle.staff.staffQuestion = response.data.staffQuestion;
                        handle.staff.staffAnswer = response.data.staffAnswer;
                        handle.staff.staffPassword = response.data.staffPassword;
                        handle.staff.staffIsAdmin = response.data.staffIsAdmin;
                        handle.staff.staffName = response.data.staffName;
                        handle.staff.staffPhone = response.data.staffPhone;
                        handle.staff.staffLogin = response.data.staffLogin;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //------------------金额相关后台交互-----------------------------
            //金额相关后台交互：按月查询
            findMoneyByDate: function (t_date) {
                var t_year = t_date.split("-")[0];		//当前年
                var t_month = t_date.split("-")[1];		//当天月
                var dayNum = this.getDayNumber(t_year, t_month);	//当月的天数
                var t_firstDate = t_year + "-" + t_month + "-" + "01";
                var t_lastDate = t_year + "-" + t_month + "-" + dayNum.toString();

                var handle = this; //供axios使用外层this
                axios.get(this.url + "consume/findAgeByDayBetween", {
                    params: {
                        startDate: t_firstDate,
                        endDate: t_lastDate
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    //初始化图表数据
                    handle.init_moneyMonthData(t_year, t_month, dayNum);
                    handle.money_currentMonth = t_year + "年" + t_month + "月";		//按月查看-信息提示
                    handle.money_totalMonthConsume = 0.00;					//按月查看-合计应收金额
                    handle.money_totalMonthRealConsume = 0.00;				//按月查看-合计实收金额

                    //与填充图表数据
                    var t_totalMoney = 0.00;
                    var t_totalRealMoney = 0.00;
                    var t_day = '';
                    var t_string = '';
                    for (var i = 0; i < dayNum; i++) {
                        if (i >= 0 && i < 9) {
                            t_day = "0" + (i + 1).toString();
                        } else {
                            t_day = (i + 1).toString();
                        }
                        t_string = t_year + "-" + t_month + "-" + t_day;

                        for (var j = 0; j < response.data.length; j++) {
                            if (response.data[j].consumeDay.indexOf(t_string) >= 0) {

                                if (response.data[j].dayConsumePrice != null) {
                                    handle.money_monthData.rows[i].all_should_money = handle.money_monthData.rows[i].all_should_money + response.data[j].dayConsumePrice;
                                    t_totalMoney = t_totalMoney + response.data[j].dayConsumePrice;
                                } else {
                                    handle.money_monthData.rows[i].all_should_money = handle.money_monthData.rows[i].all_should_money + 0.00;
                                    t_totalMoney = t_totalMoney + 0.00;
                                }

                                if (response.data[j].dayConsumeDeduct != null) {
                                    handle.money_monthData.rows[i].all_deduct_money = handle.money_monthData.rows[i].all_deduct_money + response.data[j].dayConsumeDeduct;
                                    t_totalRealMoney = t_totalRealMoney + response.data[j].dayConsumeProfit;
                                } else {
                                    handle.money_monthData.rows[i].all_deduct_money = handle.money_monthData.rows[i].all_deduct_money + 0.00;
                                    t_totalRealMoney = t_totalRealMoney + 0.00;
                                }

                                if (response.data[j].dayConsumeProfit != null) {
                                    handle.money_monthData.rows[i].all_real_money = handle.money_monthData.rows[i].all_real_money + response.data[j].dayConsumeProfit;
                                } else {
                                    handle.money_monthData.rows[i].all_real_money = handle.money_monthData.rows[i].all_real_money + 0.00;
                                }

                                if (response.data[j].dayConsumePrice1 != null) {
                                    handle.money_monthData.rows[i].chlid_should_money = handle.money_monthData.rows[i].chlid_should_money + response.data[j].dayConsumePrice1;
                                } else {
                                    handle.money_monthData.rows[i].chlid_should_money = handle.money_monthData.rows[i].chlid_should_money + 0.00;
                                }

                                if (response.data[j].dayConsumeDeduct1 != null) {
                                    handle.money_monthData.rows[i].chlid_deduct_money = handle.money_monthData.rows[i].chlid_deduct_money + response.data[j].dayConsumeDeduct1;
                                } else {
                                    handle.money_monthData.rows[i].chlid_deduct_money = handle.money_monthData.rows[i].chlid_deduct_money + 0.00;
                                }

                                if (response.data[j].dayConsumeProfit1 != null) {
                                    handle.money_monthData.rows[i].chlid_real_money = handle.money_monthData.rows[i].chlid_real_money + response.data[j].dayConsumeProfit1;
                                } else {
                                    handle.money_monthData.rows[i].chlid_real_money = handle.money_monthData.rows[i].chlid_real_money + 0.00;
                                }

                                if (response.data[j].dayConsumePrice2 != null) {
                                    handle.money_monthData.rows[i].youth_should_money = handle.money_monthData.rows[i].youth_should_money + response.data[j].dayConsumePrice2;
                                } else {
                                    handle.money_monthData.rows[i].youth_should_money = handle.money_monthData.rows[i].youth_should_money + 0.00;
                                }

                                if (response.data[j].dayConsumeDeduct2 != null) {
                                    handle.money_monthData.rows[i].youth_deduct_money = handle.money_monthData.rows[i].youth_deduct_money + response.data[j].dayConsumeDeduct2;
                                } else {
                                    handle.money_monthData.rows[i].youth_deduct_money = handle.money_monthData.rows[i].youth_deduct_money + 0.00;
                                }

                                if (response.data[j].dayConsumeProfit2 != null) {
                                    handle.money_monthData.rows[i].youth_real_money = handle.money_monthData.rows[i].youth_real_money + response.data[j].dayConsumeProfit2;
                                } else {
                                    handle.money_monthData.rows[i].youth_real_money = handle.money_monthData.rows[i].youth_real_money + 0.00;
                                }

                                if (response.data[j].dayConsumePrice3 != null) {
                                    handle.money_monthData.rows[i].mid_should_money = handle.money_monthData.rows[i].mid_should_money + response.data[j].dayConsumePrice3;
                                } else {
                                    handle.money_monthData.rows[i].mid_should_money = handle.money_monthData.rows[i].mid_should_money + 0.00;
                                }

                                if (response.data[j].dayConsumeDeduct3 != null) {
                                    handle.money_monthData.rows[i].mid_deduct_money = handle.money_monthData.rows[i].mid_deduct_money + response.data[j].dayConsumeDeduct3;
                                } else {
                                    handle.money_monthData.rows[i].mid_deduct_money = handle.money_monthData.rows[i].mid_deduct_money + 0.00;
                                }

                                if (response.data[j].dayConsumeProfit3 != null) {
                                    handle.money_monthData.rows[i].mid_real_money = handle.money_monthData.rows[i].mid_real_money + response.data[j].dayConsumeProfit3;
                                } else {
                                    handle.money_monthData.rows[i].mid_real_money = handle.money_monthData.rows[i].mid_real_money + 0.00;
                                }

                                if (response.data[j].dayConsumePrice4 != null) {
                                    handle.money_monthData.rows[i].old_should_money = handle.money_monthData.rows[i].old_should_money + response.data[j].dayConsumePrice4;
                                } else {
                                    handle.money_monthData.rows[i].old_should_money = handle.money_monthData.rows[i].old_should_money + 0.00;
                                }

                                if (response.data[j].dayConsumeDeduct4 != null) {
                                    handle.money_monthData.rows[i].old_deduct_money = handle.money_monthData.rows[i].old_deduct_money + response.data[j].dayConsumeDeduct4;
                                } else {
                                    handle.money_monthData.rows[i].old_deduct_money = handle.money_monthData.rows[i].old_deduct_money + 0.00;
                                }

                                if (response.data[j].dayConsumeProfit4 != null) {
                                    handle.money_monthData.rows[i].old_real_money = handle.money_monthData.rows[i].old_real_money + response.data[j].dayConsumeProfit4;
                                } else {
                                    handle.money_monthData.rows[i].old_real_money = handle.money_monthData.rows[i].old_real_money + 0.00;
                                }
                            }
                        }
                    }
                    handle.money_totalMonthConsume = t_totalMoney;
                    handle.money_totalMonthRealConsume = t_totalRealMoney;

                }).catch(function (error) {
                    console.log(error);
                });
            },

            //金额相关后台交互：按周查询
            findMoneyByWeek: function (t_weekDate) {
                var t_weekYear = t_weekDate.split("-")[0];	//周次的年
                var t_week = t_weekDate.split("-")[1];		//周次的序号
                var temp = this.getDateByWeek(t_weekDate);
                var t_firstDate = temp.split(" ")[0];
                var t_lastDate = temp.split(" ")[1];

                var handle = this; //供axios使用外层this
                axios.get(this.url + "consume/findAgeByDayBetween", {
                    params: {
                        startDate: t_firstDate,
                        endDate: t_lastDate
                    }
                }).then(function (response) {
                    //console.log(response.data);						//测试代码
                    //初始化图表数据
                    handle.init_moneyWeekData(t_weekYear, t_week);
                    handle.money_currentWeek = t_weekYear + "年" + t_week + "周";	//按周查看-信息提示
                    handle.money_totalWeekConsume = 0.00;					//按周查看-合计应收金额
                    handle.money_totalWeekRealConsume = 0.00;				//按周查看-合计实收金额

                    //与填充图表数据
                    var t_totalMoney = 0.00;
                    var t_totalRealMoney = 0.00;
                    var temp1 = '';
                    var temp2 = '';
                    var temp3 = '';
                    var temp4;
                    var temp5;
                    var tempArr = [];
                    for (var i = 0; i < response.data.length; i++) {
                        temp1 = response.data[i].consumeDay.split("-")[0];
                        temp2 = response.data[i].consumeDay.split("-")[1];
                        temp3 = response.data[i].consumeDay.split("-")[2];
                        temp4 = new Date(temp1, parseInt(temp2, 10) - 1, temp3);
                        temp5 = temp4.getDay();
                        if (temp5 == 0) {
                            tempArr[i] = t_weekYear + "年" + t_week + "周星期日";
                        } else if (temp5 == 1) {
                            tempArr[i] = t_weekYear + "年" + t_week + "周星期一";
                        } else if (temp5 == 2) {
                            tempArr[i] = t_weekYear + "年" + t_week + "周星期二";
                        } else if (temp5 == 3) {
                            tempArr[i] = t_weekYear + "年" + t_week + "周星期三";
                        } else if (temp5 == 4) {
                            tempArr[i] = t_weekYear + "年" + t_week + "周星期四";
                        } else if (temp5 == 5) {
                            tempArr[i] = t_weekYear + "年" + t_week + "周星期五";
                        } else {
                            tempArr[i] = t_weekYear + "年" + t_week + "周星期六";
                        }
                    }

                    for (var i = 0; i < 7; i++) {
                        for (var j = 0; j < tempArr.length; j++) {
                            if (tempArr[j].indexOf(handle.money_weekData.rows[i].consumeDate) >= 0) {
                                if (response.data[j].dayConsumePrice != null) {
                                    handle.money_weekData.rows[i].all_should_money = handle.money_weekData.rows[i].all_should_money + response.data[j].dayConsumePrice;
                                    t_totalMoney = t_totalMoney + response.data[j].dayConsumePrice;
                                } else {
                                    handle.money_weekData.rows[i].all_should_money = handle.money_weekData.rows[i].all_should_money + 0.00;
                                    t_totalMoney = t_totalMoney + 0.00;
                                }

                                if (response.data[j].dayConsumeDeduct != null) {
                                    handle.money_weekData.rows[i].all_deduct_money = handle.money_weekData.rows[i].all_deduct_money + response.data[j].dayConsumeDeduct;
                                    t_totalRealMoney = t_totalRealMoney + response.data[j].dayConsumeProfit;
                                } else {
                                    handle.money_weekData.rows[i].all_deduct_money = handle.money_weekData.rows[i].all_deduct_money + 0.00;
                                    t_totalRealMoney = t_totalRealMoney + 0.00;
                                }

                                if (response.data[j].dayConsumeProfit != null) {
                                    handle.money_weekData.rows[i].all_real_money = handle.money_weekData.rows[i].all_real_money + response.data[j].dayConsumeProfit;
                                } else {
                                    handle.money_weekData.rows[i].all_real_money = handle.money_weekData.rows[i].all_real_money + 0.00;
                                }

                                if (response.data[j].dayConsumePrice1 != null) {
                                    handle.money_weekData.rows[i].chlid_should_money = handle.money_weekData.rows[i].chlid_should_money + response.data[j].dayConsumePrice1;
                                } else {
                                    handle.money_weekData.rows[i].chlid_should_money = handle.money_weekData.rows[i].chlid_should_money + 0.00;
                                }

                                if (response.data[j].dayConsumeDeduct1 != null) {
                                    handle.money_weekData.rows[i].chlid_deduct_money = handle.money_weekData.rows[i].chlid_deduct_money + response.data[j].dayConsumeDeduct1;
                                } else {
                                    handle.money_weekData.rows[i].chlid_deduct_money = handle.money_weekData.rows[i].chlid_deduct_money + 0.00;
                                }

                                if (response.data[j].dayConsumeProfit1 != null) {
                                    handle.money_weekData.rows[i].chlid_real_money = handle.money_weekData.rows[i].chlid_real_money + response.data[j].dayConsumeProfit1;
                                } else {
                                    handle.money_weekData.rows[i].chlid_real_money = handle.money_weekData.rows[i].chlid_real_money + 0.00;
                                }

                                if (response.data[j].dayConsumePrice2 != null) {
                                    handle.money_weekData.rows[i].youth_should_money = handle.money_weekData.rows[i].youth_should_money + response.data[j].dayConsumePrice2;
                                } else {
                                    handle.money_weekData.rows[i].youth_should_money = handle.money_weekData.rows[i].youth_should_money + 0.00;
                                }

                                if (response.data[j].dayConsumeDeduct2 != null) {
                                    handle.money_weekData.rows[i].youth_deduct_money = handle.money_weekData.rows[i].youth_deduct_money + response.data[j].dayConsumeDeduct2;
                                } else {
                                    handle.money_weekData.rows[i].youth_deduct_money = handle.money_weekData.rows[i].youth_deduct_money + 0.00;
                                }

                                if (response.data[j].dayConsumeProfit2 != null) {
                                    handle.money_weekData.rows[i].youth_real_money = handle.money_weekData.rows[i].youth_real_money + response.data[j].dayConsumeProfit2;
                                } else {
                                    handle.money_weekData.rows[i].youth_real_money = handle.money_weekData.rows[i].youth_real_money + 0.00;
                                }

                                if (response.data[j].dayConsumePrice3 != null) {
                                    handle.money_weekData.rows[i].mid_should_money = handle.money_weekData.rows[i].mid_should_money + response.data[j].dayConsumePrice3;
                                } else {
                                    handle.money_weekData.rows[i].mid_should_money = handle.money_weekData.rows[i].mid_should_money + 0.00;
                                }

                                if (response.data[j].dayConsumeDeduct3 != null) {
                                    handle.money_weekData.rows[i].mid_deduct_money = handle.money_weekData.rows[i].mid_deduct_money + response.data[j].dayConsumeDeduct3;
                                } else {
                                    handle.money_weekData.rows[i].mid_deduct_money = handle.money_weekData.rows[i].mid_deduct_money + 0.00;
                                }

                                if (response.data[j].dayConsumeProfit3 != null) {
                                    handle.money_weekData.rows[i].mid_real_money = handle.money_weekData.rows[i].mid_real_money + response.data[j].dayConsumeProfit3;
                                } else {
                                    handle.money_weekData.rows[i].mid_real_money = handle.money_weekData.rows[i].mid_real_money + 0.00;
                                }

                                if (response.data[j].dayConsumePrice4 != null) {
                                    handle.money_weekData.rows[i].old_should_money = handle.money_weekData.rows[i].old_should_money + response.data[j].dayConsumePrice4;
                                } else {
                                    handle.money_weekData.rows[i].old_should_money = handle.money_weekData.rows[i].old_should_money + 0.00;
                                }

                                if (response.data[j].dayConsumeDeduct4 != null) {
                                    handle.money_weekData.rows[i].old_deduct_money = handle.money_weekData.rows[i].old_deduct_money + response.data[j].dayConsumeDeduct4;
                                } else {
                                    handle.money_weekData.rows[i].old_deduct_money = handle.money_weekData.rows[i].old_deduct_money + 0.00;
                                }

                                if (response.data[j].dayConsumeProfit4 != null) {
                                    handle.money_weekData.rows[i].old_real_money = handle.money_weekData.rows[i].old_real_money + response.data[j].dayConsumeProfit4;
                                } else {
                                    handle.money_weekData.rows[i].old_real_money = handle.money_weekData.rows[i].old_real_money + 0.00;
                                }
                            }
                        }
                    }
                    handle.money_totalWeekConsume = t_totalMoney;
                    handle.money_totalWeekRealConsume = t_totalRealMoney;
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //------------------笔数相关后台交互-----------------------------
            //笔数相关后台交互：按月查询
            findNumByDate: function (t_date) {
                var t_year = t_date.split("-")[0];		//当前年
                var t_month = t_date.split("-")[1];		//当天月
                var dayNum = this.getDayNumber(t_year, t_month);	//当月的天数
                var t_firstDate = t_year + "-" + t_month + "-" + "01";
                var t_lastDate = t_year + "-" + t_month + "-" + dayNum.toString();

                var handle = this; //供axios使用外层this
                axios.get(this.url + "consume/findAgeByDayBetween", {
                    params: {
                        startDate: t_firstDate,
                        endDate: t_lastDate
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    //初始化图表数据
                    handle.init_numMonthData(t_year, t_month, dayNum);
                    handle.num_currentMonth = t_year + "年" + t_month + "月";		//按月查看-信息提示
                    handle.num_totalMonthConsume = 0;						//按月查看-合计笔数

                    //与填充图表数据
                    var t_totalNum = 0;
                    var t_day = '';
                    var t_string = '';
                    for (var i = 0; i < dayNum; i++) {
                        if (i >= 0 && i < 9) {
                            t_day = "0" + (i + 1).toString();
                        } else {
                            t_day = (i + 1).toString();
                        }
                        t_string = t_year + "-" + t_month + "-" + t_day;

                        for (var j = 0; j < response.data.length; j++) {
                            if (response.data[j].consumeDay.indexOf(t_string) >= 0) {
                                if (response.data[j].dayConsumeNum != null) {
                                    handle.num_monthData.rows[i].all_num = handle.num_monthData.rows[i].all_num + response.data[j].dayConsumeNum;
                                    t_totalNum = t_totalNum + response.data[j].dayConsumeNum;
                                } else {
                                    handle.num_monthData.rows[i].all_num = handle.num_monthData.rows[i].all_num + 0;
                                    t_totalNum = t_totalNum + 0;
                                }

                                if (response.data[j].dayConsumeNum1 != null) {
                                    handle.num_monthData.rows[i].chlid_num = handle.num_monthData.rows[i].chlid_num + response.data[j].dayConsumeNum1;
                                } else {
                                    handle.num_monthData.rows[i].chlid_num = handle.num_monthData.rows[i].chlid_num + 0;
                                }

                                if (response.data[j].dayConsumeNum2 != null) {
                                    handle.num_monthData.rows[i].youth_num = handle.num_monthData.rows[i].youth_num + response.data[j].dayConsumeNum2;
                                } else {
                                    handle.num_monthData.rows[i].youth_num = handle.num_monthData.rows[i].youth_num + 0;
                                }

                                if (response.data[j].dayConsumeNum3 != null) {
                                    handle.num_monthData.rows[i].mid_num = handle.num_monthData.rows[i].mid_num + response.data[j].dayConsumeNum3;
                                } else {
                                    handle.num_monthData.rows[i].mid_num = handle.num_monthData.rows[i].mid_num + 0;
                                }

                                if (response.data[j].dayConsumeNum4 != null) {
                                    handle.num_monthData.rows[i].old_num = handle.num_monthData.rows[i].old_num + response.data[j].dayConsumeNum4;
                                } else {
                                    handle.num_monthData.rows[i].old_num = handle.num_monthData.rows[i].old_num + 0;
                                }
                            }
                        }

                    }
                    handle.num_totalMonthConsume = t_totalNum;
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //笔数相关后台交互：按周查询
            findNumByWeek: function (t_weekDate) {
                var t_weekYear = t_weekDate.split("-")[0];	//周次的年
                var t_week = t_weekDate.split("-")[1];		//周次的序号
                var temp = this.getDateByWeek(t_weekDate);
                var t_firstDate = temp.split(" ")[0];
                var t_lastDate = temp.split(" ")[1];

                var handle = this; //供axios使用外层this
                axios.get(this.url + "consume/findAgeByDayBetween", {
                    params: {
                        startDate: t_firstDate,
                        endDate: t_lastDate
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    //初始化图表数据
                    handle.init_numWeekData(t_weekYear, t_week);
                    handle.num_currentWeek = t_weekYear + "年" + t_week + "周";		//按周查看-信息提示
                    handle.num_totalWeekConsume = 0;						//按周查看-合计笔数

                    //与填充图表数据
                    var t_totalNum = 0;
                    var temp1 = '';
                    var temp2 = '';
                    var temp3 = '';
                    var temp4;
                    var temp5;
                    var tempArr = [];
                    for (var i = 0; i < response.data.length; i++) {
                        temp1 = response.data[i].consumeDay.split("-")[0];
                        temp2 = response.data[i].consumeDay.split("-")[1];
                        temp3 = response.data[i].consumeDay.split("-")[2];
                        temp4 = new Date(temp1, parseInt(temp2, 10) - 1, temp3);
                        temp5 = temp4.getDay();
                        if (temp5 == 0) {
                            tempArr[i] = t_weekYear + "年" + t_week + "周星期日";
                        } else if (temp5 == 1) {
                            tempArr[i] = t_weekYear + "年" + t_week + "周星期一";
                        } else if (temp5 == 2) {
                            tempArr[i] = t_weekYear + "年" + t_week + "周星期二";
                        } else if (temp5 == 3) {
                            tempArr[i] = t_weekYear + "年" + t_week + "周星期三";
                        } else if (temp5 == 4) {
                            tempArr[i] = t_weekYear + "年" + t_week + "周星期四";
                        } else if (temp5 == 5) {
                            tempArr[i] = t_weekYear + "年" + t_week + "周星期五";
                        } else {
                            tempArr[i] = t_weekYear + "年" + t_week + "周星期六";
                        }
                    }

                    for (var i = 0; i < 7; i++) {
                        for (var j = 0; j < tempArr.length; j++) {
                            if (tempArr[j].indexOf(handle.num_weekData.rows[i].consumeDate) >= 0) {
                                if (response.data[j].dayConsumeNum != null) {
                                    handle.num_weekData.rows[i].all_num = handle.num_weekData.rows[i].all_num + response.data[j].dayConsumeNum;
                                    t_totalNum = t_totalNum + response.data[j].dayConsumeNum;
                                } else {
                                    handle.num_weekData.rows[i].all_num = handle.num_weekData.rows[i].all_num + 0;
                                    t_totalNum = t_totalNum + 0;
                                }

                                if (response.data[j].dayConsumeNum1 != null) {
                                    handle.num_weekData.rows[i].chlid_num = handle.num_weekData.rows[i].chlid_num + response.data[j].dayConsumeNum1;
                                } else {
                                    handle.num_weekData.rows[i].chlid_num = handle.num_weekData.rows[i].chlid_num + 0;
                                }

                                if (response.data[j].dayConsumeNum2 != null) {
                                    handle.num_weekData.rows[i].youth_num = handle.num_weekData.rows[i].youth_num + response.data[j].dayConsumeNum2;
                                } else {
                                    handle.num_weekData.rows[i].youth_num = handle.num_weekData.rows[i].youth_num + 0;
                                }

                                if (response.data[j].dayConsumeNum3 != null) {
                                    handle.num_weekData.rows[i].mid_num = handle.num_weekData.rows[i].mid_num + response.data[j].dayConsumeNum3;
                                } else {
                                    handle.num_weekData.rows[i].mid_num = handle.num_weekData.rows[i].mid_num + 0;
                                }

                                if (response.data[j].dayConsumeNum4 != null) {
                                    handle.num_weekData.rows[i].old_num = handle.num_weekData.rows[i].old_num + response.data[j].dayConsumeNum4;
                                } else {
                                    handle.num_weekData.rows[i].old_num = handle.num_weekData.rows[i].old_num + 0;
                                }
                            }
                        }
                    }

                    handle.num_totalWeekConsume = t_totalNum;
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //========================== 响应函数 =========================================
            //“登录页面”响应函数。初始化数据；显示四种记录。
            loading: function () {
                //获取时间信息
                this.staff = this.init_staff();
                var t_staffCode = window.location.href.split("?")[1];	//从网址获取code

                var nowDay = this.getNowDay();			//当前日期,xxxx-xx-xx(年-月-日)
                var year = nowDay.split("-")[0];		//当前年
                var month = nowDay.split("-")[1];		//当天月
                var dayNum = this.getDayNumber(year, month);	//当月的天数

                var nowWeek = this.getNowWeek();		//当前日期所在周次,xxxx-xx(年-周)
                var weekYear = nowWeek.split("-")[0];	//周次的年
                var week = nowWeek.split("-")[1];		//周次的序号

                //初始化所有图表数据
                this.init_moneyMonthData(year, month, dayNum);
                this.money_findByMonthDate = '';					//按月查看-搜素条件
                this.money_currentMonth = year + "年" + month + "月";		//按月查看-信息提示
                this.money_totalMonthConsume = 0.00;				//按月查看-合计应收金额
                this.money_totalMonthRealConsume = 0.00;			//按周查看-合计实收金额

                this.init_moneyWeekData(weekYear, week);
                this.money_findByWeekDate = '';						//按周查看搜索条件
                this.money_currentWeek = weekYear + "年" + week + "周";		//按周查看-信息提示
                this.money_totalWeekConsume = 0.00;				//按月查看-合计应收金额
                this.money_totalWeekRealConsume = 0.00;			//按月周查看-合计实收金额

                this.init_numMonthData(year, month, dayNum);
                this.num_findByMonthDate = '';						//按月查看-搜素条件
                this.num_currentMonth = year + "年" + month + "月";			//按月查看-信息提示
                this.num_totalMonthConsume = 0;					//按月查看-合计笔数

                this.init_numWeekData(weekYear, week);
                this.num_findByWeekDate = '';						//按周查看搜索条件
                this.num_currentWeek = weekYear + "年" + week + "周";		//按周查看-信息提示
                this.num_totalWeekConsume = 0;						//按周查看-合计笔数


                //与后台交互，通过t_staffCode查询 staff信息；
                var t_id = this.codeToId6(t_staffCode);
                this.findStaffById(t_id);

                //等待后台返回数据需要延迟一段时间，业务逻辑要延时处理。用setTimeout(function(),400);
                var handle = this;	//供setTimeout()使用外层this
                window.setTimeout(function () {
                    //登录校验。无账号登录||非管理员账号登录||管理员登录标识位为0，则失败。
                    if (handle.staff.staffId == 0 || handle.staff.staffIsAdmin == 0 || handle.staff.staffLogin == 0) {
                        window.location.href = "login.html";
                    }

                    //与后台交互,填充图表数据
                    handle.findMoneyByDate(year + "-" + month);
                    handle.findMoneyByWeek(nowWeek);
                    handle.findNumByDate(year + "-" + month);
                    handle.findNumByWeek(nowWeek);
                }, 400);

            },

            clickMonthButton: function (t_date) {
                this.money_clickMonthButton(t_date);
                this.num_clickMonthButton(t_date);
            },

            clickWeekButton: function (t_week) {
                this.money_clickWeekButton(t_week);
                this.num_clickWeekButton(t_week);
            },

            monthChange: function () {
                this.money_monthChange();
                this.num_monthChange();
            },

            weekChange: function () {
                this.money_weekChange();
                this.num_weekChange();
            },


            //------------------金额相关响应函数-----------------------------
            //金额相关-按月: "查询按钮"响应函数
            money_clickMonthButton: function (t_date) {
                //console.log(t_date);		//测试语句
                if (t_date == '') {
                    this.$alert("查询条件非法，请重新输入！").catch(() => {
                    });
                    console.log("input error!");
                    return false;
                } else if (t_date == null) {
                    this.$alert("查询条件非法，请重新输入！").catch(() => {
                    });
                    console.log("input error!");
                    return false;
                } else {
                    this.findMoneyByDate(t_date);
                }
            },

            //金额相关-按月: "图表切换"响应函数
            money_monthChange: function () {
                if (this.money_monthHShow == true) {
                    this.money_monthHShow = false;
                    this.money_monthLShow = true;
                } else {
                    this.money_monthHShow = true;
                    this.money_monthLShow = false;
                }
            },

            //金额相关-按周: "查询按钮"响应函数
            money_clickWeekButton: function (t_week) {
                //console.log(t_week);		//测试语句
                if (t_week == '') {				//之前没有”选择日期后点击查询按钮“的情况，不选择日期直接点击查询按钮
                    this.$alert("查询条件非法，请重新输入！").catch(() => {
                    });
                    console.log("input error!");
                    return false;
                } else if (t_week == null) {		//之前有”选择日期后点击查询按钮“的情况，不选择日期直接点击查询按钮
                    this.$alert("查询条件非法，请重新输入！").catch(() => {
                    });
                    console.log("input error!");
                    return false;
                } else {								//选择日期后点击查询按钮
                    //将标准时间转化为"年-周"格式
                    var date = new Date(t_week);
                    var year = date.getFullYear();
                    var month = date.getMonth();
                    var day = date.getDate();
                    var nowWeek = this.getWeek(year, month, day);

                    this.findMoneyByWeek(nowWeek);
                }
            },

            //金额相关-按周: "图表切换"响应函数
            money_weekChange: function () {
                if (this.money_weekHShow == true) {
                    this.money_weekHShow = false;
                    this.money_weekLShow = true;
                } else {
                    this.money_weekHShow = true;
                    this.money_weekLShow = false;
                }
            },

            //------------------笔数相关响应函数-----------------------------
            //笔数相关-按月: "查询按钮"响应函数
            num_clickMonthButton: function (t_date) {
                //console.log(t_date);		//测试语句
                if (t_date == '') {				//之前没有”选择日期后点击查询按钮“的情况，不选择日期直接点击查询按钮
                    this.$alert("查询条件非法，请重新输入！").catch(() => {
                    });
                    console.log("input error!");
                    return false;
                } else if (t_date == null) {		//之前有”选择日期后点击查询按钮“的情况，不选择日期直接点击查询按钮
                    this.$alert("查询条件非法，请重新输入！").catch(() => {
                    });
                    console.log("input error!");
                    return false;
                } else {								//选择日期后点击查询按钮
                    this.findNumByDate(t_date);
                }
            },

            //笔数相关-按月: "图表切换"响应函数
            num_monthChange: function () {
                if (this.num_monthHShow == true) {
                    this.num_monthHShow = false;
                    this.num_monthLShow = true;
                } else {
                    this.num_monthHShow = true;
                    this.num_monthLShow = false;
                }
            },

            //笔数相关-按周: "查询按钮"响应函数
            num_clickWeekButton: function (t_week) {
                //console.log(t_week);		//测试语句
                if (t_week == '') {				//之前没有”选择日期后点击查询按钮“的情况，不选择日期直接点击查询按钮
                    this.$alert("查询条件非法，请重新输入！").catch(() => {
                    });
                    console.log("input error!");
                    return false;
                } else if (t_week == null) {		//之前有”选择日期后点击查询按钮“的情况，不选择日期直接点击查询按钮
                    this.$alert("查询条件非法，请重新输入！").catch(() => {
                    });
                    console.log("input error!");
                    return false;
                } else {								//选择日期后点击查询按钮
                    //将标准时间转化为"年-周"格式
                    var date = new Date(t_week);
                    var year = date.getFullYear();
                    var month = date.getMonth();
                    var day = date.getDate();
                    var nowWeek = this.getWeek(year, month, day);

                    this.findNumByWeek(nowWeek);
                }
            },

            //笔数相关-按周: "图表切换"响应函数
            num_weekChange: function () {
                if (this.num_weekHShow == true) {
                    this.num_weekHShow = false;
                    this.num_weekLShow = true;
                } else {
                    this.num_weekHShow = true;
                    this.num_weekLShow = false;
                }
            }

        },

        watch: {
            activeName: function () {
                if (this.activeName == 'money') {
                    if (this.money_select == '按月查看') {
                        this.money_monthShow = true;
                        this.money_weekShow = false;
                        if (this.money_monthHShow == true) {
                            this.$nextTick(_ => {
                                this.$refs[`money_monthH`].echarts.resize();
                            });
                        } else {
                            this.$nextTick(_ => {
                                this.$refs[`money_monthL`].echarts.resize();
                            });
                        }
                    } else {
                        this.money_monthShow = false;
                        this.money_weekShow = true;
                        if (this.money_weekHShow == true) {
                            this.$nextTick(_ => {
                                this.$refs[`money_weekH`].echarts.resize();
                            });
                        } else {
                            this.$nextTick(_ => {
                                this.$refs[`money_weekL`].echarts.resize();
                            });
                        }
                    }
                } else {
                    if (this.num_select == '按月查看') {
                        this.num_monthShow = true;
                        this.num_weekShow = false;
                        if (this.num_monthHShow == true) {
                            this.$nextTick(_ => {
                                this.$refs[`num_monthH`].echarts.resize();
                            });
                        } else {
                            this.$nextTick(_ => {
                                this.$refs[`num_monthL`].echarts.resize();
                            });
                        }
                    } else {
                        this.num_monthShow = false;
                        this.num_weekShow = true;
                        if (this.num_weekHShow == true) {
                            this.$nextTick(_ => {
                                this.$refs[`num_weekH`].echarts.resize();
                            });
                        } else {
                            this.$nextTick(_ => {
                                this.$refs[`num_weekL`].echarts.resize();
                            });
                        }
                    }
                }
            },

            money_select: function () {
                if (this.money_select == '按月查看') {
                    //【联动】实现
                    this.num_select = '按月查看';

                    //自身业务
                    this.money_monthShow = true;
                    this.money_weekShow = false;
                    if (this.money_monthHShow == true) {
                        this.$nextTick(_ => {
                            this.$refs[`money_monthH`].echarts.resize();
                        });
                    } else {
                        this.$nextTick(_ => {
                            this.$refs[`money_monthL`].echarts.resize();
                        });
                    }
                } else {
                    //【联动】实现
                    this.num_select = '按周查看';

                    //自身业务
                    this.money_monthShow = false;
                    this.money_weekShow = true;
                    if (this.money_weekHShow == true) {
                        this.$nextTick(_ => {
                            this.$refs[`money_weekH`].echarts.resize();
                        });
                    } else {
                        this.$nextTick(_ => {
                            this.$refs[`money_weekL`].echarts.resize();
                        });
                    }
                }
            },

            num_select: function () {
                if (this.num_select == '按月查看') {
                    //【联动】实现
                    this.money_select = '按月查看';

                    //自身业务
                    this.num_monthShow = true;
                    this.num_weekShow = false;
                    if (this.num_monthHShow == true) {
                        this.$nextTick(_ => {
                            this.$refs[`num_monthH`].echarts.resize();
                        });
                    } else {
                        this.$nextTick(_ => {
                            this.$refs[`num_monthL`].echarts.resize();
                        });
                    }
                } else {
                    //【联动】实现
                    this.money_select = '按周查看';

                    //自身业务
                    this.num_monthShow = false;
                    this.num_weekShow = true;
                    if (this.num_weekHShow == true) {
                        this.$nextTick(_ => {
                            this.$refs[`num_weekH`].echarts.resize();
                        });
                    } else {
                        this.$nextTick(_ => {
                            this.$refs[`num_weekL`].echarts.resize();
                        });
                    }
                }
            }

        }

    });
    v1.loading();
}
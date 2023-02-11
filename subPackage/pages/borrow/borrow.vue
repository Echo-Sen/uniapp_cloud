<template>
	<view>
		<uni-forms :rules="rules" :value="formData" ref="form" validate-trigger="bind" err-show-type="undertext">
			<uni-group title="基本信息" top="0">
				<uni-forms-item name="name" required label="用户名">
					<uni-easyinput type="text" :inputBorder="true" v-model="formData.name" placeholder="请输入用户名">
					</uni-easyinput>
				</uni-forms-item>
				<!-- 使用原生input，需要绑定binddata -->
				<uni-forms-item name="stuNum" required label="学号">
					<uni-easyinput type="text" v-model="formData.stuNum" placeholder="请输入学号"></uni-easyinput>
				</uni-forms-item>
				</uni-forms-item>
				<uni-forms-item required name="date" label="借伞日期">
					<uni-datetime-picker timestamp v-model="formData.date"></uni-datetime-picker>
				</uni-forms-item>
				<uni-forms-item name="remarks" label="备注">
					<uni-easyinput type="textarea" v-model="formData.remarks" :maxlength="20" placeholder="请输入备注">
					</uni-easyinput>
				</uni-forms-item>
			</uni-group>
			<view>
				<button @click="submitForm('form')" type="primary">提交</button>
			</view>
		</uni-forms>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					name: '',
					date: '',
					stuNum: '',
					remarks: '',
				},
				rules: {
					name: {
						rules: [{
								required: true,
								errorMessage: '请输入姓名'
							},
							{
								minLength: 2,
								maxLength: 4,
								errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符'
							}
						]
					},
					date: {
						rules: [{
							required: true,
							errorMessage: '请输入时间'
						}]
					},
					stuNum: {
						rules: [{
							required: true,
							errorMessage: '请输入学号'
						}]
					},
				}
			}
		},
		methods: {
			change(name, value) {
				this.formData.checked = value
				this.$refs.form.setValue(name, value)
			},

			submitForm(form) {
				this.$refs[form]
					.validate()
					.then(res => {
						console.log('表单的值：', res)
						uni.showToast({
							title: '提交成功'
						})
					})
					.catch(errors => {
						console.error('提交失败：', errors)
					})
			}
		}
	}
</script>
<style>
	.uni-input-border {
		padding: 0 10px;
		height: 35px;
		width: 100%;
		font-size: 14px;
		color: #666;
		border: 1px #e5e5e5 solid;
		border-radius: 5px;
		box-sizing: border-box;
	}
</style>

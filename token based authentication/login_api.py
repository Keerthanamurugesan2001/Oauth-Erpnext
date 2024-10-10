import frappe
from frappe.auth import LoginManager

@frappe.whitelist(allow_guest = True)
def app_login(usr,pwd):
	login_manager = LoginManager()
	login_manager.authenticate(usr,pwd)
	login_manager.post_login()
	if frappe.response['message'] == 'Logged In':
		user = login_manager.user
		frappe.response['key_details'] = generate_key(user)
		frappe.response['user_details'] = get_user_details(user)
	else:
		return False
	
def generate_key(user):
	user_details = frappe.get_doc("User", user)
	api_secret = api_key = ''
	if not user_details.api_key and not user_details.api_secret:
		api_secret = frappe.generate_hash(length=15)
		api_key = frappe.generate_hash(length=15)
		user_details.api_key = api_key
		user_details.api_secret = api_secret
		user_details.save(ignore_permissions = True)
	else:
		api_secret = user_details.get_password('api_secret')
		api_key = user_details.get('api_key')
	return {"api_secret": api_secret,"api_key": api_key}

def get_user_details(user):
	user_details = frappe.get_all("User",filters={"name":user},fields=["name","first_name","last_name","email","mobile_no","gender","role_profile_name"])
	if user_details:
		return user_details
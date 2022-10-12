// Webiste Name: [Github](https://github.com/)
// ### Tasks

//      change the background colour of the button to blue.




// Write your code here:

document.querySelector('#new_repository');
<form data-turbo="false" class="js-braintree-encrypt js-repo-form" id="new_repository" aria-label="Create a new repository"
    data-braintree-key="MIIBCgKCAQEA2SzHdspMUv7qGZ83HnzVhLJKhf51rtUqnbnKBu6Oqe7U5NiEALZKpXDvHEJg3RN6blnDfv0m+4cO1Po/
    ​phgYxvJ2YizVH+Q0SzO1CehITZMh8JVBgxNCw5Pl1FmWXLm+umsFXatJYqd4tHWwT1SDqRygZjjNBDWPXveOWDVoGKxBzq7aqXwfoPR+fA6rYSLXJAPYdNW1JJUchmmQBbRzSflaquUHQhV/​90yNUKPjpHywRuvjjJ60DU5Wg64pWBfhCRwRMxJNLm+ftvomelFs9arz6g7hOdvOA4BIzgX7xfgaH5foEZR28GABru/
    ​BSEADHjhXhWCqs6ws4idDytIfJwIDAQAB"
action="/​repositories" accept-charset="UTF-8" method="post">​…​</form>
​
document.querySelector('#new_repository .btn');
<button data-analytics-event="{&quot;category&quot;:&quot;Zero User Content&quot;,&quot;action&quot;:&quot;click.cta_create_new_repository&quot;,&quot;label&quot;:&quot;location:write code&quot;}" type="submit" data-view-component="true" class="btn btn-sm btn-primary btn mb-2" style="background-color: blue;">    Create a new repository
</button>
​
document.querySelector('#new_repository .btn').style.backgroundColor = 'blue';
'blue'
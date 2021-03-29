# FREE Site Status Page
Are you looking for status page for your site/sites? Many times we need to check if our site is working properly or not, So I developed this tools , You can easliy host it on GitHub Pages and by just making few changes you can create status page for your website & as it is hosted on GitHub pages, it is completely free to use. You can check Example here [Status Page JustInClicks.com](https://status.justinclicks.com)

## How to Create Status Page for you?   
* To create status Page first fork [this](https://github.com/kaustubhk24/FREE-Site-Status-Page) repository.
* Go to repository setting and turn of GitHub pages option.
* In Next Step open file named `CNAME` & remove text `status.justinclicks.com` and enter your custom URL. e.g. `status.example.com`
* From repo settings enable tick on `SSL` & update records respectively in your domain `DNS settings`.
* Last step is to open `main.js` & you will see code below, you just need to add your sites there.
```
sites=[
    {
        'site_name':'Example.com',
        'site_url':'https://www.example.com/'
    },
    
    {
        'site_name':'Sub Example',
        'site_url':'https://sub-domain.example.com/'
    }
]
```    

* Now at the place of `site_name` you have to enter your site Title & in `site_url` enter exact URL of your site with `http or https` properly.
* Make sure you haven't kept any previous site name, just remove all of them & add yours
* Done ! Once GitHub Build pages your site status page will be Live.


## Disclaimer
We have tried our best to keep the code bug free, users are requested to confirm information with their sites before using the information provided. The author reserves the right not to be responsible for the topicality, correctness, completeness or quality of the information provided. Liability claims regarding damage caused by the use of any information provided, including any kind of information which is incomplete or incorrect, will therefore be rejected.

## Licensing
You are free to download / modify / sell code but with terms below but not limited to,
* You should not remove footer credits and links
* You can not add your footer credits
* You should remove `JustInClicks` links from `main.js` files, you should keep only your links
* All use and/or publication rights are reserved worldwide.
* Copyrights &copy; 2021 Kaustubh Kulkarni { [kaustubhk24](https://github.com/kaustubhk24/) }
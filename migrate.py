import glob
import os
import re
from shutil import copyfile



for p in glob.glob('../ochronus.com-hexo/source/_posts/*.md'):
    post_name, _ = os.path.splitext(os.path.split(p)[1])
    target_dirname = f"./content/blog/{post_name}"
    if not os.path.exists(target_dirname):
        os.makedirs(target_dirname)
    with open(p, 'r') as source_file:
        content = source_file.read()
        converted_content = re.sub(
           r"{%\s+codeblock\s+lang:(.*?)\s+%}(.*?){% endcodeblock %}", 
           r"```\1\2```",
           content,
           flags=re.MULTILINE | re.DOTALL
        )
        target_filename = f"{target_dirname}/index.md"
        with open(target_filename, 'w') as dest_file:
            dest_file.write(converted_content)
    print(post_name)
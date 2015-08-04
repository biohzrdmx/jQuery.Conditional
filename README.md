jQuery Conditional
==================

Show and hide things depending on the value of other things.

Now with 100% more HTML5!

### Basic usage ###

Basically, you'll have a `select` element that will have some options for the user to choose from.

Then, you'll have some other controls that you may want to show depending on the selected option from the `select` box.

So you'll have to add a `data-conditional` attribute to your `select`, give it a meaningful value, say 'foo'.

Now you may want to wrap the conditionally-shown elements in groups, so you can give each group a `data-condition` attribute with the name of the condition (in this case 'foo') and a `data-match` one with the actual value you want to match from the `select`.

Check the demo below and its source to see how it works.

### Demo source ###
	<div class="form-group">
		<label for="book" class="control-label">Choose a book</label>
		<select name="book" id="book" class="form-control input-block" value="" data-conditional="book">
			<option value=""></option>
			<option value="Birds from 'Murica">Birds from 'Murica</option>
			<option value="They see me rollin'">They see me rollin'</option>
		</select>
	</div>
	<div class="hide conditional-logic" data-condition="book" data-match="Birds from 'Murica">
		<div class="form-group">
			<label for="bird_favorite" class="control-label">Your favorite bird was<span class="text-danger">*</span></label>
			<input type="text" name="bird_favorite" id="bird_favorite" class="form-control">
		</div>
		<div class="form-group">
			<label for="bird_least" class="control-label">Your least-favorite bird was<span class="text-danger">*</span></label>
			<input type="text" name="bird_least" id="bird_least" class="form-control">
		</div>
	</div>
	<div class="hide conditional-logic" data-condition="book" data-match="They see me rollin'">
		<div class="form-group">
			<label for="why_hate" class="control-label">Why do you think they're hatin'?<span class="text-danger">*</span></label>
			<input type="text" name="why_hate" id="why_hate" class="form-control">
		</div>
	</div>

As you can see, its pretty straightforward:

1. Add the `data-conditional` attribute to your `select`
1. Wrap your conditional elements, add `data-condition` and `data-match` to the wrapper.
1. Profit!

### Customization ###

You may want to change the CSS class or the event, heck, you may even want to provide your own toggle logic.

That's completely possible if you override the `defaults` object inside `$.conditional`

Here's what it looks like:

	$.conditional = {
		defaults: {
			className: 'hide',
			eventName: 'change',
			onActivate: function(element, opts) {
				element.removeClass(opts.className);
			},
			onDeactivate: function(elements, opts, callback) {
				elements.addClass(opts.className);
				callback.call();
			},
			autoBind: true
		}
	};

### Troubleshooting ###

As usual, this should work on any _modern_ browser, that means you may run into issues with the crappy, glue-eating ones.

If you have an idea/fix, please feel free to fork the repo, add your fix/feature and send me a push request.

### License ###

Copyright &copy; 2015 biohzrdmx

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

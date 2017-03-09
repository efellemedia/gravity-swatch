<template>
    <div class="docs-section clearfix">
        <div class="page-header">
            <h1 id="forms">Forms</h1>
        </div>

        <div class="bs-component">
            <div class="row">
                <div class="col-6">
                    <div class="card card-block">
                        <form>
                            <fieldset>
                                <legend>Legend</legend>
                                <div class="form-group">
                                    <label for="email">E-mail Address</label>
                                    <input type="email" class="form-control" placeholder="Enter a valid e-mail address">
                                    <small class="form-text text-muted">We'll never share your e-mail with anyone else.</small>
                                </div>

                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" placeholder="Password">
                                </div>

                                <div class="form-group">
                                    <label for="select">Example Select</label>
                                    <select class="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="exampleTextarea">Example textarea</label>
                                    <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputFile">File input</label>
                                    <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
                                    <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                                </div>

                                <fieldset class="form-group">
                                    <legend>Radio buttons</legend>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                                            Option one is this and that&mdash;be sure to include why it's great
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
                                            Option two can be something else and selecting it will deselect option one
                                        </label>
                                    </div>

                                    <div class="form-check disabled">
                                        <label class="form-check-label">
                                            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
                                            Option three is disabled
                                        </label>
                                    </div>
                                </fieldset>

                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input">
                                        Check me out
                                    </label>
                                </div>

                                <button type="submit" class="btn btn-primary">Submit</button>

                            </fieldset>
                        </form>
                    </div>
                </div>

                <div class="col-6">
                    <div class="card card-block">
                        <form>
                            <legend>Legend</legend>

                            <div class="form-group">
                                <fieldset disabled>
                                    <label class="control-label" for="disabledInput">Disabled input</label>
                                    <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled="">
                                </fieldset>
                            </div>

                            <div class="form-group">
                                <fieldset>
                                    <label class="control-label" for="readOnlyInput">Readonly input</label>
                                    <input class="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here…" readonly>
                                </fieldset>
                            </div>

                            <div class="form-group has-success">
                                <label class="form-control-label" for="inputSuccess1">Input with success</label>
                                <input type="text" class="form-control form-control-success" id="inputSuccess1">
                                <div class="form-control-feedback">Success! You've done it.</div>
                            </div>

                            <div class="form-group has-warning">
                                <label class="form-control-label" for="inputWarning1">Input with warning</label>
                                <input type="text" class="form-control form-control-warning" id="inputWarning1">
                                <div class="form-control-feedback">Shucks, try again.</div>
                            </div>

                            <div class="form-group has-danger">
                                <label class="form-control-label" for="inputDanger1">Input with danger</label>
                                <input type="text" class="form-control form-control-danger" id="inputDanger1">
                                <div class="form-control-feedback">Sorry, that username's taken. Try another?</div>
                            </div>

                            <div class="form-group">
                                <label class="col-form-label col-form-label-lg" for="inputLarge">Large input</label>
                                <input class="form-control form-control-lg" type="text" id="inputLarge">
                            </div>

                            <div class="form-group">
                                <label class="col-form-label" for="inputDefault">Default input</label>
                                <input type="text" class="form-control" id="inputDefault">
                            </div>

                            <div class="form-group">
                                <label class="col-form-label col-form-label-sm" for="inputSmall">Small input</label>
                                <input class="form-control form-control-sm" type="text" id="inputSmall">
                            </div>

                            <div class="form-group">
                                <label class="control-label">Input addons</label>
                                <div class="form-group">
                                    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
                                    <div class="input-group">
                                        <div class="input-group-addon">$</div>
                                        <input type="text" class="form-control" id="exampleInputAmount" placeholder="Amount">
                                        <div class="input-group-addon">.00</div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'component-forms'
    }
</script>

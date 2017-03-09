<template>
    <div class="docs-section clearfix">
        <div class="page-header">
            <h1 id="buttons">Buttons</h1>
        </div>

        <div class="bs-component">
            <div class="row">
                <div class="col-7">
                    <p>
                        <button type="button" class="btn btn-primary">Primary</button>
                        <button type="button" class="btn btn-secondary">Secondary</button>
                        <button type="button" class="btn btn-success">Success</button>
                        <button type="button" class="btn btn-info">Info</button>
                        <button type="button" class="btn btn-warning">Warning</button>
                        <button type="button" class="btn btn-danger">Danger</button>
                        <button type="button" class="btn btn-link">Link</button>
                    </p>

                    <p>
                        <button type="button" class="btn btn-primary disabled">Primary</button>
                        <button type="button" class="btn btn-secondary disabled">Secondary</button>
                        <button type="button" class="btn btn-success disabled">Success</button>
                        <button type="button" class="btn btn-info disabled">Info</button>
                        <button type="button" class="btn btn-warning disabled">Warning</button>
                        <button type="button" class="btn btn-danger disabled">Danger</button>
                        <button type="button" class="btn btn-link disabled">Link</button>
                    </p>

                    <p>
                        <button type="button" class="btn btn-outline-primary">Primary</button>
                        <button type="button" class="btn btn-outline-secondary">Secondary</button>
                        <button type="button" class="btn btn-outline-success">Success</button>
                        <button type="button" class="btn btn-outline-info">Info</button>
                        <button type="button" class="btn btn-outline-warning">Warning</button>
                        <button type="button" class="btn btn-outline-danger">Danger</button>
                    </p>

                    <p>
                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" class="btn btn-primary">Primary</button>
                            <div class="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                </div>
                            </div>
                        </div>

                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" class="btn btn-success">Success</button>
                            <div class="btn-group" role="group">
                                <button id="btnGroupDrop2" type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop2">
                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                </div>
                            </div>
                        </div>

                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" class="btn btn-info">Info</button>
                            <div class="btn-group" role="group">
                                <button id="btnGroupDrop3" type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop3">
                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                </div>
                            </div>
                        </div>

                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" class="btn btn-warning">Warning</button>
                            <div class="btn-group" role="group">
                                <button id="btnGroupDrop4" type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop4">
                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                </div>
                            </div>
                        </div>

                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" class="btn btn-danger">Danger</button>
                            <div class="btn-group" role="group">
                                <button id="btnGroupDrop5" type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop5">
                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                </div>
                            </div>
                        </div>
                    </p>

                    <p>
                        <button type="button" class="btn btn-primary btn-lg">Large button</button>
                        <button type="button" class="btn btn-primary">Default button</button>
                        <button type="button" class="btn btn-primary btn-sm">Small button</button>
                    </p>
                </div>

                <div class="col-5">
                    <p>
                        <button type="button" class="btn btn-block btn-primary">Block level button</button>
                    </p>

                    <p>
                        <div class="btn-group">
                            <label class="btn btn-primary active">
                                <input type="checkbox" checked> Checkbox 1
                            </label>
                            <label class="btn btn-primary">
                                <input type="checkbox"> Checkbox 2
                            </label>
                            <label class="btn btn-primary">
                                <input type="checkbox"> Checkbox 3
                            </label>
                        </div>
                    </p>

                    <p>
                        <div class="btn-group">
                            <label class="btn btn-primary active">
                                <input type="radio" name="options" id="option1" checked> Radio 1
                            </label>
                            <label class="btn btn-primary">
                                <input type="radio" name="options" id="option2" checked> Radio 2
                            </label>
                            <label class="btn btn-primary">
                                <input type="radio" name="options" id="option3" checked> Radio 3
                            </label>
                        </div>
                    </p>

                    <p>
                        <div class="btn-group-vertical">
                            <label class="btn btn-primary active">
                                <input type="radio" name="options" id="option4" checked> Radio 1
                            </label>
                            <label class="btn btn-primary">
                                <input type="radio" name="options" id="option5" checked> Radio 2
                            </label>
                            <label class="btn btn-primary">
                                <input type="radio" name="options" id="option6" checked> Radio 3
                            </label>
                        </div>
                    </p>

                    <p>
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-secondary">Left</button>
                            <button type="button" class="btn btn-secondary">Middle</button>
                            <button type="button" class="btn btn-secondary">Right</button>
                        </div>
                    </p>

                    <p>
                        <div class="btn-toolbar" role="toolbar">
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-secondary">1</button>
                                <button type="button" class="btn btn-secondary">2</button>
                                <button type="button" class="btn btn-secondary">3</button>
                                <button type="button" class="btn btn-secondary">4</button>
                            </div>

                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-secondary">5</button>
                                <button type="button" class="btn btn-secondary">6</button>
                                <button type="button" class="btn btn-secondary">7</button>
                            </div>

                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-secondary">8</button>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'component-buttons'
    }
</script>
